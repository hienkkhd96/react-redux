import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.ezfrontend.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    const { config, status } = error.response;
    if (config.url === "/auth/local/register" && status === 400) {
      throw new Error("Địa chỉ email đã được đăng ký");
    }
    if (config.url === "/auth/local" && status === 400) {
      throw new Error("Sai tên tài khoản hoặc mật khẩu");
    }
    return Promise.reject(error);
  }
);
export default axiosClient;
