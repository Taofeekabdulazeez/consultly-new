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
  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    // .eq("id", session?.user?.id)
    .eq("id", 9)
    .single();

  if (error) throw new Error("Error getting current user");

  return user;
}

type options = {
  populateAvailability?: boolean;
};

export async function getUserServices(): Promise<Service[] | any[]> {
  // const session = await auth();

  const { data: services, error } = await supabase
    .from("services")
    .select("*")
    .eq("userId", 9);
  // .eq("userId", session?.user?.id);

  if (error) throw new Error("Error getting user services");

  return services;
}

export async function getServicesAndAvailabilty(): Promise<
  ServiceWithAvailability[]
> {
  // const session = await auth();

  const { data: services, error } = await supabase
    .from("services")
    .select("*, availabilityId(sun, mon, tue, wed, thu, fri, sat)")
    // .eq("userId", session?.user?.id);
    .eq("userId", 9);

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
    .from("services")
    .select("availabilityId")
    .eq("id", serviceId)
    .single();

  await supabase
    .from("availabilities")
    .update(availability)
    .eq("id", service?.availabilityId)
    .select()
    .single();
}

export async function getUserMeetings(): Promise<Meeting[] | null | any[]> {
  // const session = await auth();
  const database = createClient();

  const { data: meetings, error } = await database
    .from("meetings")
    .select("id, status, time, duration, date, guest(*), service(*)")
    // .eq("userId", session?.user?.id);
    .eq("userId", 9);

  return meetings;
}

export async function updateProfile(formData: FormData) {
  // const session = await auth();

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
    language: formData.get("language"),
    about: formData.get("about"),
  };

  await supabase
    .from("users")
    .update(rawData)
    // .eq("id", session?.user?.id)
    .eq("id", 9)
    .select()
    .single();

  revalidatePath("/dashboard/profile");
}

export async function addService(formData: any) {
  // const session = await auth();

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
    .from("availabilities")
    .insert([defaultAvailabilty])
    .select("*")
    .single();

  // const serviceData = { userId: session?.user?.id, ...formData };
  const serviceData = { userId: 9, ...formData };

  if (newAvailibility) {
    await supabase
      .from("services")
      .insert([{ availabilityId: newAvailibility?.id, ...serviceData }]);
  }

  revalidatePath("dashboard/services");
}

export async function updateService(data: any, id: string) {
  await supabase.from("services").update(data).eq("id", id);

  revalidatePath("/dashboard/services");
}

export async function deleteService(id: string) {
  // const session = await auth();

  await supabase.from("services").delete().eq("id", id);

  revalidatePath("/dashboard/services");
}

export async function setAvailabilty(formData: FormData) {
  const serviceId = formData.get("id");

  const rawData = {
    startDate: formData.get("startDate"),
    endDate: formData.get("endDate"),
    availability: [`${formData.get("startTime")}-${formData.get("endTime")}`],
  };

  console.log(serviceId, rawData);

  await supabase.from("services").update(rawData).eq("id", serviceId);

  revalidatePath("/dashboard/calender");
}

export async function getConsultation(username: string = "taofeek") {
  const { data: user } = await supabase
    .from("users")
    .select("id, firstName, lastName, email, country")
    .eq("username", username)
    .single();

  const { data: services } = await supabase
    .from("services")
    .select("id, title, description, startDate, endDate, price, duration")
    .eq("userId", 9);
  console.log(services);

  revalidatePath("/consult");

  return { ...user, services };
}

export async function getAvalaibilty(serviceId: string = "107") {
  // const data = await availabilities.getByServiceId(serviceId);
  const { data } = await supabase
    .from("avalaibilities")
    .select("sun, mon, tue, wed, thu, fri, sat")
    .eq("serviceId", serviceId)
    .single();

  return data;
}
