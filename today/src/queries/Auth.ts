import { AxiosResponse} from "axios";
import { useCallback } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import {
  LoginType,
  postLogin,
  postMailSignup,
  postSignup,
  TokenType,
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

export const useLogin = () => useMutation((data: LoginType) => postLogin(data), {});
