import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const SearchClickContent = styled.div`
  width: 364px;
  height: 896px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const TextBox = styled.div`
  width: 213.22px;
  height: 51px;
  border: 1px solid blue;
  margin: 47px 33px;
`;

export const Text = styled.div`
  font-family: "SeoulHangangCBL";
  font-size: 30px;
  color: #000000;
`;

export const SubText = styled(Text)`
  font-size: 20px;
`;

export const ClickBox = styled.div``;

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
  }
`;

export const ElementBox = styled.div`
  width: 886px;
  border: 1px solid red;
  margin: 54px 31px;
`;
