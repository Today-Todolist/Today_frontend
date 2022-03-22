import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 73px;
  background: #000000;
  padding-top: 18px;
`;

export const Content = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%;
  height: 40px;
  justify-content: space-between;
`;

export const LeftContent = styled.div`
  width: 334px;
  height: 40px;
  display: flex;
`;

export const RightContent = styled.div`
  width: 580px;
  height: 40px;
  justify-content: space-between;
  display: flex;
`;

export const SearchBar = styled.div`
  width: 227px;
  height: 34px;
  border: 1px solid #ffffff;
  border-radius: 15px;
  padding-right: 8px;
  margin-left: 45px;
  display: flex;
  justify-content: space-between;
  img {
    width: 15px;
    height: 15px;
    margin-top: 8px;
  }
  input {
    width: 186px;
    background: #000000;
    border-radius: 15px;
    outline: none;
    border: none;
    color: #ffffff;
    margin-left: 5px;
  }
`;

export const Text = styled.div`
  width: 114px;
  height: 20px;
  margin-top: 9px;
  display: flex;
  font-size: 20px;
  color: #ffffff;
`;

export const MailBox = styled.div`
  width: 265px;
  padding-top: 7px;
  height: 34px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  color: #ffffff;
  text-align: center;
  font-family: "SeoulHangangCBL";
`;
