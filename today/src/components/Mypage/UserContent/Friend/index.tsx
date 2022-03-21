import * as S from "./style";

const Friend = () => {
  return (
    <S.ContentList>
      {new Array(8).fill(0).map((_, index) => (
        <S.ContentBox>
          <S.Content>
            <div>
              <S.Profile></S.Profile>
              <S.NickName>제주도가이드</S.NickName>
              <S.Email>jejuisland@gmail.com</S.Email>
            </div>
            <div>
              <S.DeleteBtn>친구 삭제</S.DeleteBtn>
            </div>
          </S.Content>
        </S.ContentBox>
      ))}
    </S.ContentList>
  );
};

export default Friend;
