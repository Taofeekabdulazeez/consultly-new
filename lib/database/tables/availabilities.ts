import DatabaseTable from "./table";

class Availabilities extends DatabaseTable {
  constructor() {
    super("availabilities");
  }

  public async getByServiceId(serviceId: string) {
    const { data, error } = await this.table
      .select("sun, mon, tue, wed, thu, fri, sat")
      .eq("serviceId", serviceId)
      .single();

    if (error) throw new Error("Could not get availability");

    return data;
  }
}

export const availabilities = new Availabilities();
