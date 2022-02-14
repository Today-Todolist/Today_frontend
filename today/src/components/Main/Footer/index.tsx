import * as S from "./style";
import { GithubLogo } from "../../../assets/Logo";

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.Content>
        <S.LeftContent>
          <span>
            해당 ‘오늘’ todolist는 대덕소프트웨어 마이스터고등학교 학생의
            프로젝트 입니다. 악의적인 목적을 위한 행위은 삼가주시기
            부탁드립니다.
          </span>
          <p>email | today043149@gmail.com</p>
        </S.LeftContent>
        <S.RightContent
          href="https://github.com/Today-Todolist"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GithubLogo} />
        </S.RightContent>
      </S.Content>
    </S.FooterContainer>
  );
};

export default Footer;
