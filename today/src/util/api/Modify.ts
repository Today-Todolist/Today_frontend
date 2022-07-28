import Uri from "../../constant/baseUrl";
import request from "../axios";

export const uploadImg = async (image: File) => {
  const formData = new FormData();
  formData.append("profile", image);
  return await request.put(Uri + `profile`, formData);
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

export const changeTodoOn = async () => {
  return await request.post(Uri + `edit-availability/on`);
};

export const changeTodoOff = async () => {
  return await request.post(Uri + `edit-availability/off`);
};

export const initializationTodo = async (password: string) => {
  return await request.post(Uri + `reset-todolist`, password);
};

export const deleteAcccount = async (passwrod: string) => {
  return await request.post(Uri + `delete-user`, passwrod);
};
