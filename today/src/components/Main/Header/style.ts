import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 73px;
  border: 1px solid black;
  background-color: #000000;
  position: fixed;
  z-index: 10;
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
  cursor: pointer;
  font-family: "SeoulHangangCBL";
  span {
    margin-top: 8px;
    font-size: 22px;
  }
`;

export const LoginBtn = styled.div`
  width: 90px;
  height: 38px;
  border: 1px solid #ffffff;
  padding: 9px 18px;
  border-radius: 8px;
`;

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 100;
  &.Overlay {
    background: rgba(113, 113, 113, 0.83);
  }
`;

export const Modal = {
  content: {
    margin: "200px auto",
    width: "440px",
    height: "390px",
    background: "#000000",
    padding: "40px 45px",
  },
};

export const SignupContainer = styled.div`
  background: #000000;
  width: 345px;
  height: 305px;
  text-align: center;
  position: fixed;
  z-index: 100;
`;

export const Logo = styled.img`
  margin-bottom: 37px;
`;

export const ClcikContent = styled.div`
  height: 220px;
`;

export const Inputs = styled.input`
  width: 100%;
  height: 44px;
  border: 2px solid #ffffff;
  border-radius: 20px;
  outline: none;
  background: #000000;
  padding: 15px 20px;
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 13px;
`;

export const SubBtn = styled.div`
  width: 100%;
  height: 44px;
  background: #ffffff;
  border-radius: 20px;
  padding-top: 10px;
  cursor: pointer;
  font-family: "SeoulHangangCBL";
`;
