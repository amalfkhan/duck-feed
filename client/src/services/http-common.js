//api access point for all requests
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api",
});
