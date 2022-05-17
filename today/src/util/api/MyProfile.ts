import baseURL from "../../constant/baseUrl";
import request from "../axios";

export interface Templates {
  id: string;
  title: string;
  profile: string;
}

export interface MyInfo {
  email: string;
  nickname: string;
  profile: string;
  friends_amount: number;
  templates: Templates[];
}

export const getMyProfile = async () => {
  return await request.get<MyInfo>(baseURL + `/info`);
};
