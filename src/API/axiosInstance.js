import axios from "axios";


const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BURL}`,
  header:{
    "Accept-Language":"en"
  }
});

export default axiosInstance;