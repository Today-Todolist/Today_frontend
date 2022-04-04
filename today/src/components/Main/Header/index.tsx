import * as S from "./style";
import { HeaderLogo, SignupLogo } from "../../../assets/Logo";
import { useState } from "react";
import Modal from "react-modal";

const Header = () => {
  const [isOpenSignupModal, setOpenSignupModal] = useState<boolean>(false);

  const onClickModal = () => {
    setOpenSignupModal(!isOpenSignupModal);
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
              <S.Inputs placeholder="이메일" />
              <S.Inputs placeholder="비밀번호" />
              <S.Inputs placeholder="닉네임" />
              <S.SubBtn>다음</S.SubBtn>
            </S.ClcikContent>
          </S.SignupContainer>
        </Modal>
      </S.ModalContainer>
    </>
  );
};

export default Header;
