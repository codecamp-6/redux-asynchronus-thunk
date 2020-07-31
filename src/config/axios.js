import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

axios.interceptors.request.use((config) => {
  if (config.url.includes("/login")) return config;

  config.headers["Authorization"] =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjpudWxsLCJpZCI6MSwiaWF0IjoxNTk2MTg2NTUxLCJleHAiOjE1OTYxOTAxNTF9.kPDXX1WnJY8QmLXSesbeyHiFdzzjE7X6d6_KboGNuI4";
  return config;
});

export default axios;
