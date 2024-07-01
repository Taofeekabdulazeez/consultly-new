"use server";

import { revalidatePath } from "next/cache";
// import { auth, signIn, signOut } from "./auth";
import { supabase } from "./database/supabase";
// import { availabilities } from "./database/tables/availabilities";
import { createClient } from "@/utils/supabase/server";

// const supabase = createClient();

// export async function signInAction() {
//   await signIn("google", { redirectTo: "/dashboard" });
// }

// export async function signOutAction() {
//   await signOut({ redirectTo: "/" });
// }

// export async function createUser(user: any) {
//   await supabase.from("users").insert([user]).select();
// }

// export async function getExistingUser(email: string): Promise<User> {
//   const { data: user, error } = await supabase
//     .from("users")
//     .select("*")
//     .eq("email", email)
//     .single();

//   return user;
// }

export async function getCurrentUser(): Promise<User> {
  // const session = await auth();
  const database = createClient();
  const { data } = await database.auth.getUser();

  const { data: user, error } = await supabase
    .from("user")
    .select("*")
    // .eq("id", session?.user?.id)
    .eq("id", data.user?.id)
    .single();

  if (error) throw new Error("Error getting current user");

  return user;
}

type options = {
  populateAvailability?: boolean;
};

export async function getUserServices(): Promise<Service[] | any[]> {
  // const session = await auth();
  const database = createClient();
  const {
    data: { user },
  } = await database.auth.getUser();

  const { data: services, error } = await supabase
    .from("service")
    .select("*")
    .eq("userId", user?.id);

  if (error) throw new Error("Error getting user services");

  return services;
}

export async function getServicesAndAvailabilty(): Promise<
  ServiceWithAvailability[]
> {
  // const session = await auth();
  const database = createClient();
  const {
    data: { user },
  } = await database.auth.getUser();

  const { data: services, error } = await supabase
    .from("service")
    .select("*, availabilityId(sun, mon, tue, wed, thu, fri, sat)")
    .eq("userId", user?.id);
  // .eq("userId", "251020f0-27a6-40db-930d-6b9389600ba9");

  const servicesWithAVailability = services?.map((service) => {
    return {
      id: service.id,
      title: service.title,
      description: service.description,
      price: service.price,
      userId: service.userId,
      startDate: service.startDate,
      endDate: service.endDate,
      duration: service.duration,
      availability: service.availabilityId,
    };
  }) as ServiceWithAvailability[];

  if (error) throw new Error("Error getting user services");

  return servicesWithAVailability;
}

export async function updateAvailability(
  serviceId: string,
  availability: AvailabilityApi
) {
  const { data: service } = await supabase
    .from("service")
    .select("availabilityId")
    .eq("id", serviceId)
    .single();

  await supabase
    .from("availability")
    .update(availability)
    .eq("id", service?.availabilityId)
    .select()
    .single();
}

export async function getUserMeetings(): Promise<Meeting[] | null | any[]> {
  // const session = await auth();
  const database = createClient();
  const {
    data: { user },
  } = await database.auth.getUser();

  const { data: meetings, error } = await database
    .from("meeting")
    .select("id, status, time, duration, date, guest(*), service(*)")
    // .eq("userId", session?.user?.id);
    .eq("userId", user?.id);

  return meetings;
}

export async function updateProfile(formData: FormData) {
  // const session = await auth();
  const database = createClient();
  const {
    data: { user },
  } = await database.auth.getUser();

  const rawData = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    country: formData.get("country"),
    city: formData.get("city"),
    website_url: formData.get("website_url"),
    linkedIn_url: formData.get("linkedIn_url"),
    twitter_url: formData.get("twitter_url"),
    facebook_url: formData.get("facebook_url"),
    instagram_url: formData.get("instagram_url"),
    username: formData.get("username"),
    profession: formData.get("profession"),
    about: formData.get("about"),
    // language: formData.get("language"),
  };

  await supabase
    .from("user")
    .update(rawData)
    .eq("id", user?.id)
    .select()
    .single();

  revalidatePath("/dashboard/profile");
}

export async function addService(formData: any) {
  // const session = await auth();
  const database = createClient();
  const {
    data: { user },
  } = await database.auth.getUser();

  const defaultAvailabilty = {
    mon: ["07:00-17:00"],
    tue: ["07:00-17:00"],
    wed: ["07:00-17:00"],
    thu: ["07:00-17:00"],
    fri: ["07:00-17:00"],
    sat: [],
    sun: [],
  };

  const { data: newAvailibility, error } = await supabase
    .from("availability")
    .insert([defaultAvailabilty])
    .select("*")
    .single();

  const serviceData = { userId: user?.id, ...formData };
  // const serviceData = {
  //   userId: "251020f0-27a6-40db-930d-6b9389600ba9",
  //   ...formData,
  // };

  if (newAvailibility) {
    await supabase
      .from("service")
      .insert([{ availabilityId: newAvailibility?.id, ...serviceData }])
      .single();
  }

  revalidatePath("dashboard/services");
}

export async function updateService(data: any, id: string) {
  await supabase.from("service").update(data).eq("id", id);

  revalidatePath("/dashboard/services");
}

export async function deleteService(id: string) {
  // const session = await auth();

  await supabase.from("service").delete().eq("id", id);

  revalidatePath("/dashboard/services");
}

export async function setAvailabilty(formData: FormData) {
  const serviceId = formData.get("id");

  const rawData = {
    startDate: formData.get("startDate"),
    endDate: formData.get("endDate"),
    availability: [`${formData.get("startTime")}-${formData.get("endTime")}`],
  };

  await supabase.from("service").update(rawData).eq("id", serviceId);

  revalidatePath("/dashboard/calender");
  revalidatePath("/dashboard/services");
}

export async function getConsultation(username: string = "taofeek") {
  const { data: user } = await supabase
    .from("user")
    .select("id, firstName, lastName, email, country")
    .eq("username", username)
    .single();

  const { data: services } = await supabase
    .from("service")
    .select("id, title, description, startDate, endDate, price, duration")
    .eq("userId", user?.id);

  revalidatePath("/consult");

  return { ...user, services };
}

export async function getAvalaibilty(serviceId: string = "107") {
  // const data = await availabilities.getByServiceId(serviceId);
  const { data } = await supabase
    .from("avalaibility")
    .select("sun, mon, tue, wed, thu, fri, sat")
    .eq("serviceId", serviceId)
    .single();

  return data;
}
