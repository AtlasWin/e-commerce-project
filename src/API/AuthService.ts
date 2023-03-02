import { instance } from "./instance/instance";

export const authLogin = async (email: string, password: string) => {
  return await instance.post("/auth/login", { email, password });
};

export const getUser = async () => {
  return await instance.get("/auth/profile");
};
