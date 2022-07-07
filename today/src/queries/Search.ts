import { useQuery } from "react-query";
import queryKeys from "../constant/Querykeys";
import {
  getSearchEmail,
  getSearchNickName,
  getSearchNumber,
  getSearchTemplate,
} from "../util/api/Search";

export const useSearchNumber = (keyword: string) =>
  useQuery([queryKeys.search], () => getSearchNumber(keyword));

export const useSearchNickName = (keyword: string) =>
  useQuery([queryKeys.search], () => getSearchNickName(keyword));

export const useSearchEmail = (keyword: string) =>
  useQuery([queryKeys.search], () => getSearchEmail(keyword));

export const useSearchTemplate = (keyword: string) =>
  useQuery([queryKeys.search], () => getSearchTemplate(keyword));
