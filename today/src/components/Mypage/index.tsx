import React, { useState } from "react";
import NavType from "../../interface/Nav";
import MyProfile from "./MyProfile";
import * as S from "./style";
import Template from "./Template";
import Apply from "./UserContent/Apply";
import Friend from "./UserContent/Friend";
import Record from "./UserContent/Record";

const Mypage = () => {
  const RecordContent = 1;
  const FriendContent = 2;
  const ApplyContent = 3;
  const [contentState, setContentState] = useState(RecordContent);

  const onRecordClick = () => {
    setContentState(RecordContent);
  };

  const onFriendClick = () => {
    setContentState(FriendContent);
  };

  const onApplyClick = () => {
    setContentState(ApplyContent);
  };

  const title: NavType[] = [
    { title: "나의 기록", onClick: onRecordClick },
    {
      title: "나의 친구",
      onClick: onFriendClick,
    },
    {
      title: "친구 신청",
      onClick: onApplyClick,
    },
  ];

  const renderContent = (): JSX.Element => {
    const contentMap = new Map<number, React.FC>()
      .set(RecordContent, Record)
      .set(FriendContent, Friend)
      .set(ApplyContent, Apply);
    const content = React.createElement(contentMap.get(contentState)!);
    return <>{content}</>;
  };

  return (
    <S.Container>
      <S.MyProfileContent>
        <MyProfile />
      </S.MyProfileContent>
      <S.UserContent>
        <S.TitleBox>
          {title.map((value, index) => {
            return (
              <S.Title
                click={contentState === index + 1}
                onClick={value.onClick}
                key={index}
              >
                <span>{value.title}</span>
              </S.Title>
            );
          })}
        </S.TitleBox>
        <S.ElementBox>{renderContent()}</S.ElementBox>
      </S.UserContent>
      <S.TemplatContent>
        <Template />
      </S.TemplatContent>
    </S.Container>
  );
};

export default Mypage;
