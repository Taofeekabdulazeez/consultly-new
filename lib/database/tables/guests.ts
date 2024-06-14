import DatabaseTable from "./table";

class Guests extends DatabaseTable {
  constructor() {
    super("guests");
  }
}

export const guests = new Guests();
