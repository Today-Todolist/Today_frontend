import { LeftArrowIcons, RightArrowIcons } from "../../../assets/Icons";
import * as S from "./style";

const Calendar = () => {
  return (
    <S.Container>
      <S.Content>
        <S.CalendarTop>
          <img src={LeftArrowIcons} />
          <S.YearMonthFont>2022년 8월</S.YearMonthFont>
          <img src={RightArrowIcons} />
        </S.CalendarTop>
        <S.CalendarDay>달력 부분</S.CalendarDay>
      </S.Content>
    </S.Container>
  );
};

export default Calendar;
