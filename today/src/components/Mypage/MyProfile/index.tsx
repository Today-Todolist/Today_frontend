import * as S from "./style";
import { SearchIcons } from "../../../assets/Icons";
import { useMyProfile } from "../../../queries/User";

const MyProfile = () => {
  const { data } = useMyProfile();

  console.log(data?.data)


  return (
    <S.MyProfileContainer>
      <S.MyProfileContent>
        <S.ProfileBox>
          <S.Profile src={data?.data.profile} />
          <div>
            <S.Name>{data?.data.nickname}</S.Name>
            <S.Email>{data?.data.email}</S.Email>
          </div>
        </S.ProfileBox>
        <S.SortBox>
          <div>
            {/*   <img src={FriendIcons} /> */}
            <span>내 친구 {data?.data.friends_amount}</span>
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
        {/* {new Array(8).fill(0).map((_, index) => (
          <S.Templat>
            <img src=""></img>
            <span>나주 여행</span>
          </S.Templat>
        ))}{" "} */}
        만드신 템플릿이 없습니다.
      </S.TemplatList>
    </S.MyProfileContainer>
  );
};

export default MyProfile;
