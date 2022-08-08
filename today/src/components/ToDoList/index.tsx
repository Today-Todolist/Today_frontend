import Calendar from "./Calendar";
import * as S from "./style";
import ToDo from "./ToDo";

const ToDoList = () => {
  return (
    <S.Container>
      <Calendar />
      <ToDo />
    </S.Container>
  );
};

export default ToDoList;
