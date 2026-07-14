import axios from "axios";
import { useAuthStore } from "../Store/useAuthStore";

// const tokenLS = localStorage.getItem('accessToken');
// console.log(tokenLS);
// this method to get the already saved token
const token = useAuthStore.getState().token;
// console.log(token);

const axiosAuthInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BURL}`,
  headers:{
    "Accept-Language":"en",
    "Authorization": `Bearer ${token} `
  }
});

export default axiosAuthInstance;