import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const ModifyProfileContent = styled.div`
  width: 364px;
  height: 896px;
  padding-top: 28px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ProfileBox = styled.div`
  width: 90%;
  height: 117px;
  margin: 0 auto;
`;

export const ProfileContent = styled.div`
  width: 90%;
  height: 55px;
  margin: 15px 12px 18px;
  display: flex;
`;

export const Profile = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50px;
  margin-right: 4px;
`;

export const TextBox = styled.div`
  p {
    font-size: 30px;
    color: #000000;
    :nth-child(2) {
      font-size: 20px;
    }
  }
`;

export const ModifyBtn = styled.label`
  width: 100px;
  height: 22px;
  background: #000000;
  border-radius: 15px;
  font-size: 15px;
  text-align: center;
  color: #ffffff;
  padding: 6px 8px;
  cursor: pointer;
`;

export const SetBox = styled.div`
  width: 209px;
  height: 94px;
  padding: 5px 0;
  margin-top: 28px;
`;

export const SetContent = styled.div<{ click: boolean }>`
  height: 33px;
  cursor: pointer;
  margin-bottom: 18px;
  padding-top: 5px;
  border-left: ${(props) => (props.click ? "5px solid #000000" : "none")};
  span {
    margin-left: 10px;
    font-size: 25px;
  }
`;

export const ElementBox = styled.div`
  height: 378px;
  margin: 185px 16px;
`;
