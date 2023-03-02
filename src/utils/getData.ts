import { instance } from "../API/instance/instance";

export const getData = async (title: string) => {
  const response = await instance.get("/products/", {
    params: {
      title,
    },
  });
  return response.data;
};
