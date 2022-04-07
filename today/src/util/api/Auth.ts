import Uri from "../../constant/baseUrl";
import request from "../axios";

export interface SignupType {
  email: string;
  password: string;
  nickname: string;
}

export const postSignup = async (data: SignupType) => {
  return await request.post(Uri + `sign-up/email`, data);
};
