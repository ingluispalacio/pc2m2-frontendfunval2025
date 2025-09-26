import axios from "axios";
import  configEnv  from "./config";

const client = axios.create({
  baseURL: configEnv.apiBase ,
  timeout: 8000,
});

client.interceptors.request.use((cfg) => {
  if (configEnv.apiKey) {
    cfg.headers["Authorization"] = configEnv.apiKey; 
  }
  return cfg;
});

export default client;