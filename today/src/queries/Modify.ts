import { useMutation } from "react-query";
import {
  changeNickName,
  changePassword,
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
