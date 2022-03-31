import React, { useState } from "react";
import NavType from "../../interface/Nav";
import Email from "./Email";
import NickName from "./NickName";
import * as S from "./style";
import Template from "./Template";

const ModifyProfile = () => {
  const NickNameContent = 1;
  const EmailContent = 2;
  const TemplateContent = 3;
  const [contentState, setContentState] = useState(NickNameContent);

  const onNickNameClick = () => {
    setContentState(NickNameContent);
  };

  const onEmailClick = () => {
    setContentState(EmailContent);
  };

  const onTemplateClick = () => {
    setContentState(TemplateContent);
  };

  const title: NavType[] = [
    {
      title: "닉네임",
      onClick: onNickNameClick,
    },
    {
      title: "이메일",
      onClick: onEmailClick,
    },
    {
      title: "템플릿",
      onClick: onTemplateClick,
    },
  ];

  const renderContent = (): JSX.Element => {
    const contentMap = new Map<number, React.FC>()
      .set(NickNameContent, NickName)
      .set(EmailContent, Email)
      .set(TemplateContent, Template);
    const content = React.createElement(contentMap.get(contentState)!);
    return <>{content}</>;
  };

  return (
    <S.Container>
      <S.SearchClickContent>
        <S.TextBox>
          <S.Text>가나다라마바사</S.Text>
          <S.SubText>총 100건의 결과</S.SubText>
        </S.TextBox>
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
      </S.SearchClickContent>
      <S.ElementBox>{renderContent()}</S.ElementBox>
    </S.Container>
  );
};

export default ModifyProfile;
