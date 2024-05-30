import { supabase } from "../supabase";

export async function createUser(user: any) {
  await supabase.from("users").insert([user]).select();
}

export async function getUser(email: string) {
  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  return user;
}
