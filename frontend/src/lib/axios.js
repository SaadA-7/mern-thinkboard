import axios from "axios";

// Check if we're running on localhost (development) or not (production)
const BASE_URL = window.location.hostname === "localhost" 
  ? "http://localhost:5001/api" 
  : "/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;