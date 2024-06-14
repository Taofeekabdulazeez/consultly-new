import DatabaseTable from "./table";

class Users extends DatabaseTable {
  constructor() {
    super("users");
  }
}

export const users = new Users();
