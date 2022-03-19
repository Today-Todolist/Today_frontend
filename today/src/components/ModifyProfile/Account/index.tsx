import * as S from "./style";

const Account = () => {
  return (
    <S.ResetBox>
      <S.ResetContent>
        <S.TitleBox>
          <S.Title>투두리스트 초기화</S.Title>
          <S.SubTitle>
            지금까지 해온 투두리스트를 초기화하고 새로 시작합니다
          </S.SubTitle>
        </S.TitleBox>
        <S.InputBox>
          <S.Input placeholder="현재 비밀번호" />
          <S.ResetBtn>투두리스트 초기화</S.ResetBtn>
        </S.InputBox>
      </S.ResetContent>
      <S.ResetContent>
        <S.TitleBox>
          <S.DeleteTitle>계정 삭제</S.DeleteTitle>
          <S.SubTitle>오늘과의 만남을 뒤로 하고 이별을 마주합니다</S.SubTitle>
        </S.TitleBox>
        <S.InputBox>
          <S.Input placeholder="현재 비밀번호" />
          <S.DeleteBtn>계정 삭제</S.DeleteBtn>
        </S.InputBox>
      </S.ResetContent>
    </S.ResetBox>
  );
};

export default Account;
