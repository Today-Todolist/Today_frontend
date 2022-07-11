import Uri from "../../constant/baseUrl";
import request from "../axios";

export const uploadImg = async (image: File) => {
  const formData = new FormData();
  formData.append("image", image);
  return await request.put(Uri + `profile`);
};

export const changeNickName = async (newNickName: string) => {
  return await request.put(Uri + `nickname`, newNickName);
};

export interface PasswordType {
  password: string;
  new_password: string;
}

export const changePassword = async (data: PasswordType) => {
  return await request.put(Uri + `password`, data);
};
