import axios from "axios";

export const axiosNode = axios.create({
  baseURL: "http://localhost:5000/",
  validateStatus: status => status < 300,
  headers: {
    "authorization": `${localStorage.getItem("access_token") ?? undefined}`
  }
});

export const axiosFlask = axios.create({
  baseURL: "http://127.0.0.1:5500/"
});

export const axiosFlaskCluster = axios.create({
  baseURL: "http://localhost:5600/"
})