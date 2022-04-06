import styled from "styled-components";

export const TitleBox = styled.div`
  display: flex;
  margin-bottom: 40px;
  padding: 10px 8px 0px;
`;

export const Title = styled.div`
  font-family: "SeoulHangangCBL";
  font-size: 25px;
  color: #000000;
`;

export const SubTitle = styled.div`
  font-family: "SeoulHangangCBL";
  font-size: 20px;
  color: #848484;
  margin: 6px 10px;
`;

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

export const NickName = styled(Title)`
  color: #ffffff;
  margin: 5px 9px 0px;
`;

export const Email = styled(NickName)`
  font-size: 15px;
  margin-top: 14px;
`;

export const ApplyBtn = styled.div`
  width: 100px;
  height: 38px;
  background: #ffffff;
  border-radius: 15px;
  padding: 9px 9px;
`;
