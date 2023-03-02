import { User } from "../types/interfaces";
import { instance } from "./instance/instance";

export const addNewUser = async (data: User) => {
  return await instance.post("/users", data);
};
