import { supabase } from "../supabase";

class DatabaseTable {
  table: ReturnType<typeof supabase.from>;
  queryString: string;

  constructor(queryString: string) {
    this.table = supabase.from(queryString);
    this.queryString = queryString;
  }

  public async getAll() {
    const { data, error } = await this.table.select("*");

    if (error) throw new Error(`Error getting ${this.queryString}`);

    return data;
  }

  public async getByUserId(id: string) {
    const { data: meetings, error } = await this.table
      .select("*")
      .eq("userId", id);

    if (error) throw new Error(`Error getting user ${this.queryString}`);

    return meetings;
  }
}

export default DatabaseTable;
