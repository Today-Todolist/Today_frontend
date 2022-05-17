import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Email from "../../components/Email";

const MailLoadingContainer = () => {
  const { token, email } = useParams<{
    token: string;
    email: string;
  }>();

  return <Email />;
};

export default MailLoadingContainer;
