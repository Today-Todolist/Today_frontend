import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 200px;
  width: 100%;
  background: #fbfbfb;
  z-index: 9;
  top: 2700px;
  position: absolute;
`;

export const Content = styled.div`
  border-top: 1px solid #c4c4c4;
  display: flex;
  width: 93%;
  height: 50px;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 41px;
`;

export const LeftContent = styled.div`
  width: 760px;
  height: 115px;
  font-size: 22px;
  p {
    margin-top: 40px;
  }
`;

export const RightContent = styled.a`
  width: 40px;
  height: 40px;
  margin-top: 96px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
`;
