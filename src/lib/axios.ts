import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dulces-petalos.jakala.es",
});

export default axiosInstance;
