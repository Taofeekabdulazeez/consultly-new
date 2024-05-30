"use server";

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
  const session = (await auth()) as any;
  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", session?.user?.userId)
    .single();

  if (error) throw new Error("Error getting current user");

  return user;
}

export async function getUserServices(): Promise<Service[]> {
  const session = (await auth()) as any;

  const { data: services, error } = await supabase
    .from("services")
    .select("*")
    .eq("userId", session?.user?.userId);

  if (error) throw new Error("Error getting user services");

  return services;
}
