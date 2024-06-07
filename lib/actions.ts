"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

export async function signInAction() {
  await signIn("google", { redirectTo: "/dashboard" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function createUser(user: any) {
  await supabase.from("users").insert([user]).select();
}

export async function getExistingUser(email: string): Promise<User> {
  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  return user;
}

export async function getCurrentUser(): Promise<User> {
  const session = await auth();
  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", session?.user?.id)
    .single();

  if (error) throw new Error("Error getting current user");

  return user;
}

export async function getUserServices(): Promise<Service[]> {
  const session = await auth();

  const { data: services, error } = await supabase
    .from("services")
    .select("*")
    .eq("userId", session?.user?.id);

  if (error) throw new Error("Error getting user services");

  return services;
}

export async function getUserMeetings(): Promise<Meeting[] | null | any[]> {
  const session = await auth();
  const { data: meetings, error } = await supabase
    .from("meetings")
    .select("id, status, time, duration, date, guest(*), service(*)")
    .eq("userId", session?.user?.id);

  return meetings;
}

export async function updateProfile(formData: FormData) {
  const session = await auth();

  const rawData = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    country: formData.get("country"),
    city: formData.get("city"),
    linkedIn_url: formData.get("linkedIn_url"),
    twitter_url: formData.get("twitter_url"),
    facebook_url: formData.get("facebook_url"),
    instagram_url: formData.get("instagram_url"),
    username: formData.get("username"),
    profession: formData.get("profession"),
    language: formData.get("language"),
    about: formData.get("about"),
  };

  const { data } = await supabase
    .from("users")
    .update(rawData)
    .eq("id", session?.user?.id)
    .select()
    .single();

  console.log(data);
}

export async function addService(formData: FormData) {
  const session = await auth();

  // const rawData = {
  //   title: formData.get("title"),
  //   description: formData.get("description"),
  //   price: Number(formData.get("price")),
  //   duration: Number(formData.get("duration")),
  //   userId: session?.user?.id,
  // };

  const rawData = {
    title: "Test",
    description: "Test description",
    price: 10,
    duration: 20,
    userId: session?.user?.id,
  };

  await supabase.from("services").insert([rawData]);
}

export async function deleteService(id: string) {
  const session = await auth();

  await supabase.from("services").delete().eq("id", id);
}

export async function updateService(id: string, formData: FormData) {
  console.log(id, formData);
  const rawData = {
    title: formData.get("title"),
    description: formData.get("description"),
    price: Number(formData.get("price")),
    duration: Number(formData.get("duration")),
  };

  await supabase.from("services").update(rawData).eq("id", id);
}

export async function setAvailabilty(formData: FormData) {
  const serviceId = formData.get("id");

  const rawData = {
    startDate: formData.get("startDate"),
    endDate: formData.get("endDate"),
  };

  await supabase.from("services").update(rawData).eq("id", serviceId);
}

export async function getConsultation(username: string = "taofeek") {
  const { data: user } = await supabase
    .from("users")
    .select("id, firstName, lastName, email, country")
    .eq("username", username)
    .single();

  const { data: services } = await supabase
    .from("services")
    .select(
      "id, title, description, startDate, endDate, price, duration, availability"
    )
    .eq("userId", user?.id);

  console.log(services);

  revalidatePath("/consultv2");

  return { ...user, services };
}
