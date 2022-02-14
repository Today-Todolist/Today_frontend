import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 73px;
  border: 1px solid black;
  background-color: #000000;
`;

export const Content = styled.div`
  display: flex;
  margin: 18px auto;
  width: 95%;
  height: 40px;
  justify-content: space-between;
`;

export const LeftContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 266px;
  height: 40px;
  color: #ffffff;
  span {
    margin-top: 8px;
  }
`;

export const RightContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 187px;
  color: #ffffff;
  span {
    margin-top: 8px;
    font-size: 22px;
  }
`;

export const LoginBtn = styled.div`
  width: 90px;
  height: 38px;
  border: 1px solid #ffffff;
  padding: 9px 15px;
  border-radius: 8px;
`;
