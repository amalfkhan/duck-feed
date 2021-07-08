import http from "./http-common";

class EntriesDataServices {
  getAllEntries() {
    return http.get("/");
  }

  createEntry(data) {
    return http.post("/entry", data);
  }
}

export default new EntriesDataServices();
