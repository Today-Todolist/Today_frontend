import { useListFriends, useMyProfile } from "../../../../queries/User";
import * as S from "./style";

const Friend = () => {
  const { data: emailData } = useMyProfile();
  const { data } = useListFriends(emailData?.data.email || "", 1, 100);

  return (
    <S.ContentList>
      {data?.data.contents.map((item, index) => {
        return (
          <S.ContentBox>
            <S.Content key={index}>
              <div>
                <S.Profile />
                <S.NickName>{item.nickname}</S.NickName>
                <S.Email>{item.email}</S.Email>
              </div>
              <div>
                <S.DeleteBtn>친구 삭제</S.DeleteBtn>
              </div>
            </S.Content>
          </S.ContentBox>
        );
      })}
      {data?.data.contents === [] ? <div>현재 친구가 없습니다.</div> : null}
    </S.ContentList>
  );
};

export default Friend;
