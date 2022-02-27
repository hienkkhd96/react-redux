import axiosClient from "./axiosClient";

const productApi = {
  async getAll(params) {
    const newParams = { ...params };
    // Transform _page to _start
    newParams._start =
      !params._page || params._page <= 1
        ? 0
        : (params._page - 1) * (params._limit || 10);
    // Remove _page key
    delete newParams._page;
    // Fetch Product list + cont
    const productList = await axiosClient.get("/products", {
      params: newParams,
    });
    const count = await axiosClient.get("/products/count", {
      params: newParams,
    });
    return {
      data: productList,
      pagination: {
        page: params._page,
        limit: params._limit,
        total: count,
      },
    };
  },
  get(id) {
    const url = `https://api.ezfrontend.com/products/${id}`;
    return axiosClient.get(url);
  },
};
export default productApi;
