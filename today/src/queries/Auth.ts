import { useMutation } from "react-query";
import { postMailSignup, postSignup, SignupType } from "../util/api/Auth";

export const useMailSignup = () =>
  useMutation((data: SignupType) => postMailSignup(data), {});

export const useSignup = () =>
  useMutation(
    ({ email, token }: { email: string; token: string }) =>
      postSignup(email, token),
    {}
  );
