import * as S from "./style";
import { HeaderLogo, SignupLogo } from "../../../assets/Logo";
import React, { useState } from "react";
import Modal from "react-modal";
import useFrom, { NameTypes } from "../../../hook/useFrom";
import { useMailSignup } from "../../../queries/Auth";

interface InputType extends NameTypes {
  email: string;
  password: string;
  nickname: string;
}

const Header = () => {
  const [isOpenSignupModal, setOpenSignupModal] = useState<boolean>(false);
  const mailSignupMutation = useMailSignup();
  const [inputProps, [inputs, setInputs]] = useFrom<InputType>({
    email: "",
    password: "",
    nickname: "",
  });

  const onClickModal = () => {
    setOpenSignupModal(!isOpenSignupModal);
  };

  const onSubmit = () => {
    alert("이메일을 확인해 주세요.");
  };

  const onSubmitError = () => {
    alert("입력하신 이메일이 사용 중입니다.");
  };

  const onSignup = () => {
    mailSignupMutation.mutate(
      {
        email: inputs.email,
        password: inputs.password,
        nickname: inputs.nickname,
      },
      { onSuccess: onSubmit, onError: onSubmitError }
    );
  };

  return (
    <>
      <S.HeaderContainer>
        <S.Content>
          <S.LeftContent>
            <img src={HeaderLogo} />
            <span>오늘이란?</span>
            <span>오늘 팀</span>
          </S.LeftContent>
          <S.RightContent>
            <span onClick={onClickModal}>회원가입</span>
            <S.LoginBtn>로그인</S.LoginBtn>
          </S.RightContent>
        </S.Content>
      </S.HeaderContainer>
      <S.ModalContainer>
        <Modal
          style={S.Modal}
          overlayClassName={S.ModalContainer.Overlay}
          isOpen={isOpenSignupModal}
          onRequestClose={onClickModal}
        >
          <S.SignupContainer>
            <S.Logo src={SignupLogo} />
            <S.ClcikContent>
              <S.Inputs placeholder="이메일" {...inputProps["email"]} />
              <S.Inputs placeholder="비밀번호" {...inputProps["password"]} />
              <S.Inputs placeholder="닉네임" {...inputProps["nickname"]} />
              <S.SubBtn onClick={onSignup}>다음</S.SubBtn>
            </S.ClcikContent>
          </S.SignupContainer>
        </Modal>
      </S.ModalContainer>
    </>
  );
};

export default Header;
