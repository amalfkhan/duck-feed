import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:5000/api",
});

class EntriesDataServices {
  getAllEntries() {
    return http.get("/");
  }

  createEntry(data) {
    return http.post("/entry", data);
  }
}

export default new RestaurantDataService();
