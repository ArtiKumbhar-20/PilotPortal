import axios from "axios";

const baseURL = "http://127.0.0.1:8000"; // Update with your Django backend URL

const api = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
