import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import NavType from "../../interface/Nav";
import { useUploadImage } from "../../queries/Modify";
import { useMyProfile } from "../../queries/User";
import Account from "./Account";
import Info from "./Info";
import * as S from "./style";

const ModifyProfile = () => {
  const InfoContent = 1;
  const AccountContent = 2;
  const [contentState, setContentState] = useState(InfoContent);
  const { data } = useMyProfile();
  const queryClient = useQueryClient();
  const upload = useUploadImage();

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

  const uploadProfile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files;
    if (!file) return;
    await toast.promise(upload.mutateAsync(file[0]), {
      loading: "사진 업로드 중...",
      error: "사진 업로드 실패",
      success: "사진 업로드 성공",
    });

    queryClient.invalidateQueries([""]);
  };

  return (
    <S.Container>
      <S.ModifyProfileContent>
        <S.ProfileBox>
          <S.ProfileContent>
            <S.Profile src={data?.data.profile} />
            <S.TextBox>
              <p>{data?.data.nickname}</p>
              <p>{data?.data.email}</p>
            </S.TextBox>
          </S.ProfileContent>
          <S.ModifyBtn htmlFor="profileImg">프로필 수정</S.ModifyBtn>
          <input
            type="file"
            id="profileImg"
            accept="image/*"
            style={{ display: "none" }}
            onChange={uploadProfile}
            onClick={(e) => e.stopPropagation()}
          />
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
