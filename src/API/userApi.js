import axiosClient from "./axiosClient";

const userApi = {
  register(data) {
    const url = "https://api.ezfrontend.com/auth/local/register";
    return axiosClient.post(url, data);
  },
  login(data) {
    const url = "https://api.ezfrontend.com/auth/local";
    return axiosClient.post(url, data);
  },
};

export default userApi;
