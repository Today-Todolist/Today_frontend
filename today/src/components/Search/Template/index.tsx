import * as S from "./style";

const Template = () => {
  return (
    <>
      {" "}
      <S.TitleBox>
        <S.Title>2건의 결과</S.Title>
        <S.SubTitle>템플릿 제목으로 검색할 결과입니다</S.SubTitle>
      </S.TitleBox>
      {new Array(8).fill(0).map((_, index) => (
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
