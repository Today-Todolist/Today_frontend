import { useQuery } from "react-query";
import queryKeys from "../constant/Querykeys";
import {
  getListFriends,
  getListFriendsApply,
  getMyProfile,
  getMyTemplates,
  getRecommTemplates,
} from "../util/api/User";

export const useMyProfile = () =>
  useQuery([queryKeys.profile, queryKeys.my], () => getMyProfile());

export const useListFriends = (email: string, page: number, size: number) =>
  useQuery([queryKeys.friend, queryKeys.my], () =>
    getListFriends(email, page, size)
  );

export const useListFriendsApply = (page: number, size: number) => {
  useQuery([queryKeys.friend, queryKeys.my], () =>
    getListFriendsApply(page, size)
  );
};

export const useRecommTemplates = () =>
  useQuery([queryKeys.template], () => getRecommTemplates());

export const useMyTemplates = () =>
  useQuery([queryKeys.template, queryKeys.my], () => getMyTemplates());
