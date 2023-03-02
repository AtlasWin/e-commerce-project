import { instance } from "./instance/instance";

export const getAllProducts = async (limit?: number, offset?: number) => {
  return await instance.get(`/products`, {
    params: {
      limit,
      offset,
    },
  });
};

export const getSingleProduct = async (id: number) => {
  return await instance.get(`/products/${id}`);
};
