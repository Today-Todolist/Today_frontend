import axios, { AxiosRequestConfig } from "axios";
import baseURL from "../../constant/baseUrl";
import storage from "../../constant/Storage";

interface TokenType {
  accessToken: string;
  refreshToken: string;
}

export const request = axios.create({
  baseURL,
  timeout: 100000,
});

const getDateWithAddHour = (hour: number) => {
  const date = new Date();
  date.setHours(date.getHours() + hour);
  return date;
};

export const refresh = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const expireAt = localStorage.getItem(storage.expireAt);
  let accessToken = localStorage.getItem(storage.accessToken);
  const refreshToken = localStorage.getItem(storage.refreshToken);

  if (!refreshToken || !expireAt) {
    window.location.href = "/";
    localStorage.removeItem("expireAt");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }

  {
    /*if(new Date() >= new Date(expireAt)) {
      try{
          const {} = (await request.post<TokenType>())
      }
  } */
  }

  return config;
};
