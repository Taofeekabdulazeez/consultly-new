import { auth } from "../auth";
import { supabase } from "../supabase";

class UserAction {
  // session;
  constructor() {}

  async getCurrentUser(): Promise<User> {
    const session = await auth();
    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", session?.user?.id)
      .single();

    if (error) throw new Error("Error getting current user");

    return user;
  }
}
