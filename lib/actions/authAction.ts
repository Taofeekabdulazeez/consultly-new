import { signIn, signOut } from "../auth";
import { supabase } from "../supabase";
import { ServerAction } from "./serverAction";

class AuthAction extends ServerAction {
  constructor() {
    super();
  }

  public async login() {
    await signIn("google", { redirectTo: "/dashboard" });
  }

  public async logout() {
    await signOut({ redirectTo: "/" });
  }

  public async createUser(user: any): Promise<void> {
    await supabase.from("users").insert([user]).select();
  }

  public async getExistingUser(email: string): Promise<User> {
    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    return user;
  }
}

const authAction = new AuthAction();

export default authAction;
