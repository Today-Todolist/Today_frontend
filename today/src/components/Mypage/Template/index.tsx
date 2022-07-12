import { useRecommTemplates } from "../../../queries/User";
import * as S from "./style";

const Template = () => {
  const {data} = useRecommTemplates()

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
      <S.ContentBox>
          <S.UserBox>
            <img src={data?.data.profile}></img>
            <span>{data?.data.title}</span>
          </S.UserBox>
          <S.TemplateBox>
            <div></div>
            <span>{data?.data.template}</span>
          </S.TemplateBox>
        </S.ContentBox>
    </>
  );
};

export default Template;
