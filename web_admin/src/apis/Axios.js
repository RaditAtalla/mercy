import axios from "axios";

const instance = axios.create({
  baseURL: "http://66.42.48.47:3005/",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);

export default instance;
