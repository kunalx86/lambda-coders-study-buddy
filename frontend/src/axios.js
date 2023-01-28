import axios from "axios";

export const axiosNode = axios.create({
  url: "http://localhost:5000/",
  validateStatus: status => status < 300
});