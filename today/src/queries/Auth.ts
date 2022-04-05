import { useMutation } from "react-query";
import { postSignup, SignupType } from "../util/api/Auth";

export const useSignup = () =>
  useMutation((data: SignupType) => postSignup(data), {});
