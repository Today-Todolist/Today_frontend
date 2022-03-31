import * as S from "./style";
import { SearchIcons } from "../../../assets/Icons";

const MyProfile = () => {
  return (
    <S.MyProfileContainer>
      <S.MyProfileContent>
        <S.ProfileBox>
          <S.Profile></S.Profile>
          <div>
            <S.Name>나주가이드</S.Name>
            <S.Email>todaytodolist@gmail.com</S.Email>
          </div>
        </S.ProfileBox>
        <S.SortBox>
          <div>
            {/*   <img src={FriendIcons} /> */}
            <span>내 친구 12321</span>
          </div>
          <S.SetBox>정보 설정</S.SetBox>
        </S.SortBox>
      </S.MyProfileContent>
      <S.SortBox>
        <S.SearchContent>
          <S.SearchInput placeholder="나의 투두리스트 템플릿 검색" />
          <img src={SearchIcons} />
        </S.SearchContent>
        <S.TemplateBtn></S.TemplateBtn>
      </S.SortBox>
      <S.TemplatList>
        {new Array(8).fill(0).map((_, index) => (
          <S.Templat>
            <img src=""></img>
            <span>나주 여행</span>
          </S.Templat>
        ))}{" "}
      </S.TemplatList>
    </S.MyProfileContainer>
  );
};

export default MyProfile;
