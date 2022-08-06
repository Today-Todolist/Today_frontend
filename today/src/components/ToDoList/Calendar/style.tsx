import styled from "styled-components";

export const Container = styled.div`
  width: 528px;
  background-color: #ffffff;
  padding-top: 45px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
  width: 421px;
  height: 393px;
  margin: 0 auto;
`;

export const CalendarTop = styled.div`
  height: 37px;
  display: flex;
  img {
    cursor: pointer;
  }
`;

export const YearMonthFont = styled.span`
  font-size: 40px;
  margin: 0 9px;
`;

export const CalendarDay = styled.div`
  border: 1px solid blue;
  width: 100%;
  margin-top: 35px;
  height: 322px;
`;
