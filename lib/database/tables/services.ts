import DatabaseTable from "./table";

class Services extends DatabaseTable {
  constructor() {
    super("services");
  }
}

export const services = new Services();
