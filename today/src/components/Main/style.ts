import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  background: #000000;
  position: relative;
  height: fit-content;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const TopContent = styled.div`
  height: 590px;
  margin: 0 auto;
  display: flex;
  z-index: 2;
  img {
    width: 567px;
    height: 802px;
  }
`;

export const BtnBox = styled.div`
  width: 670px;
  height: 445px;
  margin: 162px 345px 0px 358px;
  color: #ffffff;
  p {
    margin: 74px 0 80px 140px;
  }
`;

export const Text = styled.div`
  position: absolute;
  top: 15.4%;
  left: 50px;
  width: 27px;
  height: 433px;
`;

export const LogoBox = styled.div`
  display: flex;
  img {
    width: 100px;
    height: 100px;
  }
  span {
    font-family: "SeoulHangangCBL";
    color: #ffffff;
    font-size: 80px;
    margin: 19px 49px;
  }
`;

export const LogBtn = styled.div`
  width: 368px;
  height: 55px;
  background: #ffffff;
  color: #000000;
  margin: 30px auto;
  text-align: center;
  padding-top: 17px;
  font-size: 24px;
  font-family: "SeoulHangangCBL";
`;

export const SignBtn = styled(LogBtn)`
  background: #000000;
  color: #ffffff;
  border: 2px solid white;
`;

export const TodayBox = styled.div`
  width: 808px;
  height: 156px;
  z-index: 1;
  position: absolute;
  top: 1330px;
  left: 148px;
  p {
    margin-bottom: 19px;
    font-size: 25px;
    :first-child {
      font-size: 60px;
      font-family: "SeoulHangangCBL";
    }
  }
  span {
    font-size: 80px;
    font-family: "SeoulHangangCBL";
  }
`;

export const TeamBox = styled(TodayBox)`
  top: 2230px;
`;

export const TeamInfoBox = styled.div`
  width: 386px;
  padding-left: 34px;
  height: 175px;
  position: absolute;
  top: 2230px;
  right: 308px;
  border-left: 4px solid black;
`;

export const MemberBox = styled.a`
  width: 410px;
  height: 70px;
  margin-bottom: 35px;
  display: flex;
  color: black;
  text-decoration: none;
  img {
    margin-right: 9px;
  }
  span {
    font-size: 28px;
  }
  p {
    :first-child {
      font-size: 20px;
    }
    font-size: 25px;
    margin-top: 5px;
  }
`;

export const Line = styled.div`
  display: flex;
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
