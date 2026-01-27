import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7264ff608360481dbb928e2a6063afc5",
  },
});

export default apiClient;
