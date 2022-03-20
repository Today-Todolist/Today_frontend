import React from "react";
import { useState } from "react";
import * as S from "./style";

const Email = () => {
  return (
    <>
      <S.TitleBox>
        <S.Title>2건의 결과</S.Title>
        <S.SubTitle>유저의 이메일로 검색할 결과입니다.</S.SubTitle>
      </S.TitleBox>
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
    </>
  );
};

export default Email;
