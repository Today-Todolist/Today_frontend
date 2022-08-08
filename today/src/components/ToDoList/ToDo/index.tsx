import { AddIcons, DownIcons } from "../../../assets/Icons";
import * as S from "./style";

const ToDo = () => {
  return (
    <S.Container>
      <S.ContentTop>
        <S.Day>2022.07.20</S.Day>
        <S.ModalBtn>
          <img src={AddIcons} />
        </S.ModalBtn>
        <S.ModalBtn>
          <img src={DownIcons} />
        </S.ModalBtn>
      </S.ContentTop>
      <S.ContentBox>
        <S.Content>
          <S.ToDoContentTop></S.ToDoContentTop>
        </S.Content>
      </S.ContentBox>
    </S.Container>
  );
};

export default ToDo;
