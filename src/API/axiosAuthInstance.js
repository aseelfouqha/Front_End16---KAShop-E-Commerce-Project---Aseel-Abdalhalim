import axios from "axios";
import { useAuthStore } from "../Store/useAuthStore";



const token = useAuthStore.getState().token;

const axiosAuthInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BURL}`,
  headers:{
    "Accept-Language":"en",
    "Authorization": `Bearer ${token} `
  }
});

export default axiosAuthInstance;