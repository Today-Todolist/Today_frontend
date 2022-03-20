import * as S from "./style";

const Apply = () => {
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
              <S.ApplyBtn>친구 신청</S.ApplyBtn>
            </div>
          </S.Content>
        </S.ContentBox>
      ))}
    </S.ContentList>
  );
};

export default Apply;
