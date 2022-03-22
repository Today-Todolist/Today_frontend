import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const MyProfileContent = styled.div`
  width: 364px;
  height: 896px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const UserContent = styled.div`
  width: 936px;
  height: 633.85px;
  margin: 69px 77px;
`;

export const TitleBox = styled.div`
  height: 28px;
  margin-bottom: 42px;
  display: flex;
  width: 357px;
  justify-content: space-between;
`;

export const Title = styled.div<{ click: boolean }>`
  cursor: pointer;
  span {
    font-size: 25px;
    color: ${(props) => (props.click ? "#000000" : "#848484")};
  }
`;

export const ElementBox = styled.div`
  width: 100%;
`;

export const TemplatContent = styled.div`
  width: 326px;
  margin: 45px 82px;
`;
