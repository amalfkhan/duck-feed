//api access points needed for entries
//seperated into independent file to maintain organization if app scaled
import http from "./http-common";

class EntriesDataServices {
  getAllEntries() {
    return http.get("/");
  }

  createEntry(data) {
    console.log(data.datetime);
    return http.post("/entry", data);
  }
}

export default new EntriesDataServices();
