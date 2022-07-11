import { useState } from "react";
import toast from "react-hot-toast";
import { useChangeNickName } from "../../../queries/Modify";
import * as S from "./style";

const Info = () => {
  const [nickName, setNickName] = useState<string>("");
  const [passWord, setPassWord] = useState<string>("");

  const changeNickName = useChangeNickName();

  const onClickNickName = () => {
    changeNickName.mutate(nickName, {
      onSuccess: () => {
        toast.success("닉네임 변경이 성공했습니다.");
      },
      onError: () => {
        toast.error("닉네임 변경이 실패되었습니다.");
      },
    });
  };

  return (
    <S.ModifyBox>
      <S.ModifyContent>
        <S.TitleBox>
          <S.Title>닉네임 변경</S.Title>
          <S.SubTitle>자신의 닉네임을 변경합니다</S.SubTitle>
        </S.TitleBox>
        <S.InputBox>
          <S.Input
            placeholder="바꿀 닉네임"
            onChange={(e) => setNickName(e.currentTarget.value)}
          />
          <S.ModifyBtn onClick={onClickNickName}>닉네임 변경</S.ModifyBtn>
        </S.InputBox>
      </S.ModifyContent>
      <S.ModifyContent>
        <S.TitleBox>
          <S.Title>비밀번호 변경</S.Title>
          <S.SubTitle>자신의 비밀번호을 변경합니다</S.SubTitle>
        </S.TitleBox>
        <S.Input placeholder="현재 비밀번호" />
        <S.InputBox>
          <S.Input placeholder="바꿀 비밀번호" />
          <S.ModifyBtn>비밀번호 변경</S.ModifyBtn>
        </S.InputBox>
      </S.ModifyContent>
      <S.Line />
      <S.ProhibitionBox>
        <S.Title>계획한 투두리스트 변경 금지</S.Title>
        <S.SubTitle>
          미리 계획한 투두리스트를 오늘 수정할 수 없게 합니다
        </S.SubTitle>
        <S.OnOffBtn>꺼짐</S.OnOffBtn>
      </S.ProhibitionBox>
    </S.ModifyBox>
  );
};

export default Info;
