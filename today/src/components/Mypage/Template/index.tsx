import * as S from "./style";

const Template = () => {
  return (
    <>
      <S.TextBox>
        <span>추천 투두리스트 템플릿</span>
      </S.TextBox>
      {new Array(5).fill(0).map((_, index) => (
        <S.ContentBox>
          <S.UserBox>
            <div></div>
            <span>나주가이드</span>
          </S.UserBox>
          <S.TemplateBox>
            <div></div>
            <span>나주 여행</span>
          </S.TemplateBox>
        </S.ContentBox>
      ))}
    </>
  );
};

export default Template;
