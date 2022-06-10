import Uri from "../../constant/baseUrl";
import request, { instance } from "../axios";

export interface SignupType {
  email: string;
  password: string;
  nickname: string;
}

export const postMailSignup = async (data: SignupType) => {
  return await request.post(Uri + `sign-up/email`, data);
};

export const postSignup = async (email: string, token: string) => {
  return await request.post(
    Uri + `sign-up?email=` + `${email}` + `&token=` + `${token}`
  );
};

export interface LoginType {
  email: string;
  password: string;
}

export interface TokenType {
  access_token: string;
  refresh_token: string;
}

export const postLogin = async (data: LoginType) => {
  return await instance.post<TokenType>(Uri + `login`, data);
};
