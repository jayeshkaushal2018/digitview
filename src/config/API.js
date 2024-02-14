import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://reqres.in/api/",
  // other configurations
});

AxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("call the refresh token api here");
      // Handle 401 error, e.g., redirect to login or refresh token
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;
