import { instance } from "./instance/instance";

export const categoriesService = async () => {
  return await instance.get("/categories");
};

export const singleCategory = async (id: number) => {
  return await instance.get(`/categories/${id}`);
};

export const singleCategoryProducts = async (id: number) => {
  return await instance.get(`/categories/${id}/products`);
};
