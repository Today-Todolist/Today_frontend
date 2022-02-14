import * as S from "./style";
import { HeaderLogo } from "../../../assets/Logo";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Content>
        <S.LeftContent>
          <img src={HeaderLogo} />
          <span>오늘이란?</span>
          <span>오늘 팀</span>
        </S.LeftContent>
        <S.RightContent>
          <span>회원가입</span>
          <S.LoginBtn>로그인</S.LoginBtn>
        </S.RightContent>
      </S.Content>
    </S.HeaderContainer>
  );
};

export default Header;
