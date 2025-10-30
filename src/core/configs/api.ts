import axios from "axios";

const api = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });

api.interceptors.response.use(
  (res) => res.data,
  (error) => Promise.reject(error)
);

export default api;
