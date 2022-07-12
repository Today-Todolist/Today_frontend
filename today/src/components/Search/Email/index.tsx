import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useSearchEmail } from "../../../queries/Search";
import * as S from "./style";

const Email = () => {
  const [searchParams] = useSearchParams();
  const searchWord = useMemo(() => searchParams.get("q") || "", [searchParams]);
  const { data } = useSearchEmail(searchWord);

  return (
    <>
      <S.TitleBox>
        <S.Title>{data?.data.length}건의 결과</S.Title>
        <S.SubTitle>유저의 이메일로 검색할 결과입니다.</S.SubTitle>
      </S.TitleBox>
      <S.ContentList>
        {data?.data.map((item, index) => {
          return (
            <S.ContentBox>
              <S.Content key={index}>
                <div>
                  <S.Profile src={item.profile} />
                  <S.NickName>{item.nickname}</S.NickName>
                  <S.Email>{item.email}</S.Email>
                </div>
                <div>
                  <S.ApplyBtn>친구 신청</S.ApplyBtn>
                </div>
              </S.Content>
            </S.ContentBox>
          );
        })}
      </S.ContentList>
    </>
  );
};

export default Email;
