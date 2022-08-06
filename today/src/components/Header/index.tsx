import { HeaderLogo } from "../../assets/Logo";
import * as S from "./style";
import { SearchIcons, CheckIcons } from "../../assets/Icons";
import { useMyProfile } from "../../queries/User";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { data } = useMyProfile();
  const navigate = useNavigate();

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
          <S.Text onClick={() => navigate(`/mypage`)}>
            <img src={CheckIcons} />
            <span>마이페이지</span>
          </S.Text>
          <S.Text onClick={() => navigate(`/todolist`)}>
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
