import baseURL from "../../constant/baseUrl";
import request from "../axios";

export interface SearchInfoNumber {
  nickname: number;
  email: number;
  template: number;
}

export const getSearchNumber = async (keywrod: string) => {
  return await request.get<SearchInfoNumber>(
    baseURL + `search-amount?word=${keywrod}`
  );
};

export interface SearchNickName {
  email: string;
  nickname: string;
  profile: string;
  status: number;
}

export const getSearchNickName = async (keyword: string) => {
  return await request.get<SearchNickName[]>(
    baseURL + `search-result/nickname?word=${keyword}&page=0&size=100`
  );
};

export interface SearchEmail {
  email: string;
  nickname: string;
  profile: string;
  status: number;
}

export const getSearchEmail = async (keyword: string) => {
  return await request.get<SearchEmail[]>(
    baseURL + `search-result/email?word=${keyword}&page=0&size=100`
  );
};

interface User {
  email: string;
  nickname: string;
  profile: string;
}

interface Template {
  id: string;
  title: string;
  profile: string;
}

export interface SearchTemplate {
  user: User;
  template: Template;
}

export const getSearchTemplate = async (keyword: string) => {
  return await request.get<SearchTemplate[]>(
    baseURL + `search-result/template?word=${keyword}&page=0&size=100`
  );
};
