import { useMutation } from "react-query";
import {
  changeNickName,
  changePassword,
  deleteAcccount,
  initializationTodo,
  PasswordType,
  uploadImg,
} from "../util/api/Modify";

export const useUploadImage = () => {
  return useMutation((image: File) => uploadImg(image));
};

export const useChangeNickName = () => {
  useMutation((newNickName: string) => changeNickName(newNickName), {});
};

export const useChangePassword = () => {
  useMutation((data: PasswordType) => changePassword(data), {});
};

export const useIitializationTodo = () => {
  useMutation((password: string) => initializationTodo(password));
};

export const useDeleteAcccount = () => {
  useMutation((password: string) => deleteAcccount(password));
};
