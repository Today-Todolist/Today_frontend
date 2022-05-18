import { HeaderLogo } from "../../assets/Logo";
import * as S from "./style";

const Email = () => {
  return (
    <S.EmailBackground>
      <S.Content>
        <img src={HeaderLogo} />
        <S.TextBox>
          <S.Font>이메일 인증에 성공하셨습니다</S.Font>
          <S.Font>로그인 화면으로 돌아가 로그인을 진행해 주세요</S.Font>
        </S.TextBox>
      </S.Content>
    </S.EmailBackground>
  );
};

export default Email;
