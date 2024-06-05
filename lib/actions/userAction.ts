import { auth } from "../auth";
import { supabase } from "../supabase";
import { ServerAction } from "./serverAction";

class UserAction extends ServerAction {
  private session: any;
  private payload: any;

  constructor() {
    super();
    this.setSession();
  }

  private async setSession() {
    this.session = await auth();
  }

  public async getProfileData(): Promise<User> {
    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", this.session?.user?.id)
      .single();

    if (error) throw new Error("Error getting current user");

    return user;
  }

  public async getServices(): Promise<Service[]> {
    const { data: services, error } = await supabase
      .from("services")
      .select("*")
      .eq("userId", this.session?.user?.id);

    if (error) throw new Error("Error getting user services");

    return services;
  }

  public async getMeetings(): Promise<Meeting[] | null | any[]> {
    const { data: meetings, error } = await supabase
      .from("meetings")
      .select("id, status, time, duration, date, guest(*), service(*)")
      .eq("userId", this.session?.user?.id);

    return meetings;
  }

  public async updateProfile(formData: FormData) {
    this.payload = {
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
      .update(this.payload)
      .eq("id", this.session?.user?.id)
      .select()
      .single();

    console.log(data);
  }

  public async addService(formData: FormData) {
    this.payload = {
      title: formData.get("title"),
      description: formData.get("description"),
      price: Number(formData.get("price")),
      duration: formData.get("duration"),
      userId: this.session?.user?.id,
    };

    await supabase.from("services").insert([this.payload]);
  }

  public async deleteService(id: string) {
    await supabase.from("services").delete().eq("id", id);
  }

  public async updateService(id: string, formData: FormData) {
    this.payload = {
      title: formData.get("title"),
      description: formData.get("description"),
      price: Number(formData.get("price")),
      duration: formData.get("duration"),
    };

    await supabase.from("services").update(this.payload).eq("id", id);
  }

  public async setAvailabilty(formData: FormData) {
    const serviceId = formData.get("id");

    this.payload = {
      startDate: formData.get("startDate"),
      endDate: formData.get("endDate"),
    };

    await supabase.from("services").update(this.payload).eq("id", serviceId);
  }
}

const userAction = new UserAction();

export default userAction;
