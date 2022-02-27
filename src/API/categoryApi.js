import axiosClient from "./axiosClient";

const categoryApi = {
  async getAll(params) {
    const url = "/categories";
    return axiosClient.get(url, { params });
  },

  getId(id) {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  },
};
export default categoryApi;
