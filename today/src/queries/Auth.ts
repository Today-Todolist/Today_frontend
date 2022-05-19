import { useMutation } from "react-query";
import {
  LoginType,
  postLogin,
  postMailSignup,
  postSignup,
  SignupType,
} from "../util/api/Auth";

export const useMailSignup = () =>
  useMutation((data: SignupType) => postMailSignup(data), {});

export const useSignup = () =>
  useMutation(
    ({ email, token }: { email: string; token: string }) =>
      postSignup(email, token),
    {}
  );

export const useLogin = () => useMutation((data: LoginType) => postLogin(data));
