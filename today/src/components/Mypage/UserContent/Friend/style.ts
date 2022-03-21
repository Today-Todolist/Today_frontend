import styled from "styled-components";

export const ContentList = styled.div``;

export const ContentBox = styled.div`
  width: 100%;
  height: 63px;
  background: #000000;
  border-radius: 20px;
  padding: 12px 22px;
  margin-bottom: 19px;
`;

export const Content = styled.div`
  display: flex;
  width: 98%;
  justify-content: space-between;
  div:nth-child(1) {
    display: flex;
  }
`;

export const Profile = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 25px;
  border: 1px solid red;
`;

export const NickName = styled.div`
  font-family: "SeoulHangang CEB";
  font-size: 25px;
  color: #ffffff;
  margin: 5px 9px 0px;
`;

export const Email = styled(NickName)`
  font-size: 15px;
  margin-top: 14px;
`;

export const DeleteBtn = styled.div`
  width: 100px;
  height: 38px;
  border-radius: 15px;
  padding: 9px 9px;
  border: 1px solid #ffffff;
  color: #ffffff;
`;
