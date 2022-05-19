import Uri from "../../constant/baseUrl";
import request from "../axios";

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
