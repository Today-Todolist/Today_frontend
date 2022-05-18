import { useQuery } from "react-query";
import queryKeys from "../constant/Querykeys";
import { getListFriends, getMyProfile } from "../util/api/User";

export const useMyProfile = () => useQuery([], () => getMyProfile());

export const use = () => useQuery([], () => getListFriends(email));
