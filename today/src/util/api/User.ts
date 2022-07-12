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
  return await request.get<MyInfo>(baseURL + `info`);
};

export interface FriendContent {
  email: string;
  nickname: string;
  profile: string;
  status: number;
}

export interface ListFriends {
  total_elements: number;
  contents: FriendContent[];
}

export const getListFriends = async (
  email: string,
  page: number,
  size: number
) => {
  return await request.get<ListFriends>(
    baseURL + `${email}` + `friends/?page=` + `${page}` + `&size=` + `${size}`
  );
};

export const getListFriendsApply = async (page: number, size: number) => {
  return await request.get<ListFriends>(
    baseURL + `friend-applys?page=` + `${page}` + `&size=` + `${size}`
  );
};

export interface Template {
  id: string;
  title: string;
  profile: string;
}

export interface User {
  email: string;
  nickname: string;
  profile: string;
}

export interface Templates {
  user: User[];
  template: Template[];
}

export const getRecommTemplates = async () => {
  return await request.get<Templates>(baseURL + `random-template?size=3`);
};

export const getMyTemplates = async () => {
  return await request.get<Template>(baseURL + `templates`);
};
