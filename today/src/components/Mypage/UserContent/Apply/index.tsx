import { useListFriendsApply } from "../../../../queries/User";
import * as S from "./style";

const Apply = () => {
  // const { data } = useListFriendsApply(1, 100);

  return (
    <S.ContentList>
      {/* {data?.data.contents.map((item, index) => {
        return (
          <S.ContentBox>
            <S.Content key={index}>
              <div>
                <S.Profile />
                <S.NickName>{item.nickName}</S.NickName>
                <S.Email>{item.email}</S.Email>
              </div>
              <S.ApplyBtn>친구 신청</S.ApplyBtn>
            </S.Content>
          </S.ContentBox>
        );
      })} */}
      {/* {data?.data.contents === [] ? <div>현재 친구가 없습니다.</div> : null}
       */}
    </S.ContentList>
  );
};

export default Apply;
