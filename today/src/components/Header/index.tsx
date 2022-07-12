import { HeaderLogo } from "../../assets/Logo";
import * as S from "./style";
import { SearchIcons, CheckIcons } from "../../assets/Icons";
import { useMyProfile } from "../../queries/User";

const Header = () => {
  const { data } = useMyProfile();

  return (
    <S.HeaderContainer>
      <S.Content>
        <S.LeftContent>
          <img src={HeaderLogo}></img>
          <S.SearchBar>
            <input />
            <img src={SearchIcons} />
          </S.SearchBar>
        </S.LeftContent>
        <S.RightContent>
          <S.Text>
            <img src={CheckIcons} />
            <span>마이페이지</span>
          </S.Text>
          <S.Text>
            <img src={CheckIcons} />
            <span>투두리스트</span>
          </S.Text>
          <S.MailBox>{data?.data.email}</S.MailBox>
        </S.RightContent>
      </S.Content>
    </S.HeaderContainer>
  );
};

export default Header;
