import React from "react";
import { useState } from "react";
import NavType from "../../interface/Nav";
import Account from "./Account";
import Info from "./Info";
import * as S from "./style";

const ModifyProfile = () => {
  const InfoContent = 1;
  const AccountContent = 2;
  const [contentState, setContentState] = useState(InfoContent);

  const onInfoClick = () => {
    setContentState(InfoContent);
  };

  const onAccountClick = () => {
    setContentState(AccountContent);
  };

  const title: NavType[] = [
    {
      title: "정보 설정",
      onClick: onInfoClick,
    },
    {
      title: "계정 설정",
      onClick: onAccountClick,
    },
  ];

  const renderContent = (): JSX.Element => {
    const contentMap = new Map<number, React.FC>()
      .set(InfoContent, Info)
      .set(AccountContent, Account);
    const content = React.createElement(contentMap.get(contentState)!);
    return <>{content}</>;
  };

  return (
    <S.Container>
      <S.ModifyProfileContent>
        <S.ProfileBox>
          <S.ProfileContent>
            <S.Profile></S.Profile>
            <S.TextBox>
              <p>나주가이드</p>
              <p>todaytodolist@gmail.com</p>
            </S.TextBox>
          </S.ProfileContent>
          <S.ModifyBtn>프로필 수정</S.ModifyBtn>
        </S.ProfileBox>
        <S.SetBox>
          {title.map((value, index) => {
            return (
              <S.SetContent
                click={contentState === index + 1}
                onClick={value.onClick}
                key={index}
              >
                <span>{value.title}</span>
              </S.SetContent>
            );
          })}
        </S.SetBox>
      </S.ModifyProfileContent>
      <S.ElementBox>{renderContent()}</S.ElementBox>
    </S.Container>
  );
};

export default ModifyProfile;
