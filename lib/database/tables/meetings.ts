import DatabaseTable from "./table";

class Meetings extends DatabaseTable {
  constructor() {
    super("meetings");
  }
}

export const meeting = new Meetings();
