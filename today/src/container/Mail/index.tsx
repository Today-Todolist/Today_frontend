import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Email from "../../components/Email";
import { useSignup } from "../../queries/Auth";

const MailLoadingContainer = () => {
  const { search } = useLocation();
  const signupMutation = useSignup();

  useEffect(() => {
    const userToken = new window.URLSearchParams(search).get("token") || "";
    const userEmail = new window.URLSearchParams(search).get("email") || "";
    signupMutation.mutate({
      email: userEmail,
      token: userToken,
    });
  }, [search]);

  return <Email />;
};

export default MailLoadingContainer;
