import { CreateInstance } from "@inteligo/api/config/axios.setup";
import { AxiosRequestConfig } from "axios";
import { API_URL } from "@inteligo/config/enviroments.config";

const axiosRequestConfiguration: AxiosRequestConfig = {
  baseURL: API_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
};

export default CreateInstance(axiosRequestConfiguration);
