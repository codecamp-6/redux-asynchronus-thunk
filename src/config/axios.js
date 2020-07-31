import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

axios.interceptors.request.use((config) => {
  if (config.url.includes("/login")) return config;

  const serializedState = localStorage.getItem("store");
  const deserializedState = JSON.parse(serializedState);
  const token = deserializedState?.user?.token;

  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

export default axios;
