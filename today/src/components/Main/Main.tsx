import * as S from "./style";
import Header from "./Header";
import Footer from "./Footer";
import Modal from "react-modal";
import {
  BackgroundIcons,
  PenIcons,
  MoonIcons,
  DHIcons,
  HKIcons,
  MainTextIcons,
} from "../../assets/Icons";
import storage from "../../constant/Storage";
import { LoginLogo } from "../../assets/Logo";
import { useState } from "react";
import useFrom, { NameTypes } from "../../hook/useFrom";
import { useLogin } from "../../queries/Auth";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import { TokenType } from "../../util/api/Auth";

interface InputType extends NameTypes {
  email: string;
  password: string;
}

const Main = () => {
  const [isOpenSignupModal, setOpenSignupModal] = useState<boolean>(false);
  const [inputProps, [inputs, setInputs]] = useFrom<InputType>({
    email: "",
    password: "",
  });
  const loginMutation = useLogin();
  const navigate = useNavigate();

  const onClickModal = () => {
    setOpenSignupModal(!isOpenSignupModal);
  };

  const storageKeys = {
    access_token: "access_token",
    refresh_token: "refresh_token",
  } as const;

  const onSubmitSuccess = (data: AxiosResponse<TokenType, unknown>) => {
    const { access_token, refresh_token } = data.data;
    localStorage.setItem(storage.access_token, access_token);
    localStorage.setItem(storage.refresh_token, refresh_token);
    alert("로그인이 성공되었습니다.");
    navigate("/mypage");
  }

  const onLogin = () => {
    loginMutation.mutate(
      
      {
        email: inputs.email,
        password: inputs.password,
      },
      {
        onSuccess: (data) => {onSubmitSuccess(data)} ,
        onError: () => {
          setInputs({email : "", password: ""});
          alert("로그인이 실패되었습니다.");
        },
      }
      
    );
  };

  return (
    <>
      <Header />
      <S.MainContainer>
        <S.TopContent>
          <S.BtnBox>
            <S.LogoBox>
              <img src={MoonIcons} />
              <span>오늘</span>
            </S.LogoBox>
            <p>당신 스스로 매일 계획하고 그 계획을 실천해보세요</p>
            <S.LogBtn onClick={onClickModal}>로그인</S.LogBtn>
            <S.SignBtn>회원가입</S.SignBtn>
          </S.BtnBox>
          <img src={PenIcons} />
          <S.Text>
            <img src={MainTextIcons} />
          </S.Text>
        </S.TopContent>
        <S.TodayBox>
          <p>
            <span>오늘</span>이란?
          </p>
          <p>
            미래의 내가 오늘 할일을 알 수 있도록 과거의 내가 미리 todolist를
            만들어 놓을 수 있는 프로그램입니다. 다양한 템플릿을 만들고 적용시킬
            수 있고 자신의 투두리스트 실행 정도를 다양한 방식으로 볼 수
            있습니다.
          </p>
        </S.TodayBox>
        <S.TeamBox>
          <p>
            <span>오늘</span> 개발팀
          </p>
          <p>
            ‘오늘’ todolist는 대덕소프트웨어 마이스터고등학교 학생의
            프로젝트입니다. 부족한 점이 많지만 열심히 개선하겠습니다.
          </p>
        </S.TeamBox>
        <S.TeamInfoBox>
          <S.MemberBox
            href="https://github.com/dohyeon5626"
            target="_blank"
            rel="noreferrer"
          >
            <img src={DHIcons} />
            <div>
              <p>
                <span>고도현</span>dohyeon5626
              </p>
              <p>kodohyeon71@gmail.com</p>
            </div>
          </S.MemberBox>
          <S.MemberBox
            href="https://github.com/kkyo4994"
            target="_blank"
            rel="noreferrer"
          >
            <img src={HKIcons} />
            <div>
              <p>
                <span>김해교</span>kkyo4994
              </p>
              <p>kkyo4994@gmail.com</p>
            </div>
          </S.MemberBox>
        </S.TeamInfoBox>
        <img src={BackgroundIcons}></img>
        <Footer />
      </S.MainContainer>
      <S.ModalContainer>
        <Modal
          style={S.Modal}
          overlayClassName={S.ModalContainer.Overlay}
          isOpen={isOpenSignupModal}
          onRequestClose={onClickModal}
        >
          <S.SignupContainer>
            <S.Logo src={LoginLogo} />
            <S.ClcikContent>
              <S.Inputs placeholder="이메일" {...inputProps["email"]} />
              <S.Inputs placeholder="비밀번호" {...inputProps["password"]} />
              <S.SubBtn onClick={onLogin}>로그인</S.SubBtn>
            </S.ClcikContent>
          </S.SignupContainer>
        </Modal>
      </S.ModalContainer>
    </>
  );
};

export default Main;
