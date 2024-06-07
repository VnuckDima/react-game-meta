import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: API_KEY,
  },
});