import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useSearchTemplate } from "../../../queries/Search";
import * as S from "./style";

const Template = () => {
  const [searchParams] = useSearchParams();
  const searchWord = useMemo(() => searchParams.get("q") || "", [searchParams]);
  const { data } = useSearchTemplate(searchWord);

  return (
    <>
      <S.TitleBox>
        <S.Title>{data?.data.length}건의 결과</S.Title>
        <S.SubTitle>템플릿 제목으로 검색할 결과입니다</S.SubTitle>
      </S.TitleBox>
      {data?.data.map((item, index) => {
        <S.ContentBox key={index}>
          <S.UserBox>
            <div></div>
            <span>{item.user.nickname}</span>
          </S.UserBox>
          <S.TemplateBox>
            <div></div>
            <span>{item.template.title}</span>
          </S.TemplateBox>
        </S.ContentBox>;
      })}
    </>
  );
};

export default Template;
