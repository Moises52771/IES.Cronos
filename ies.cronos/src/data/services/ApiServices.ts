import axios from "axios";

const url = "http://localhost/api/";

export const ApiService = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});