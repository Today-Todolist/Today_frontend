import styled from "styled-components";

export const TextBox = styled.div`
  border-left: 5px solid #000000;
  padding-left: 10px;
  margin-bottom: 9px;
  span {
    font-family: "SeoulHangang CEB";
    font-size: 20px;
    color: #000000;
  }
`;

export const TemplatBox = styled.div``;

export const ContentBox = styled.div`
  width: 100%;
  height: 75px;
  padding: 15px 25px;
  border-bottom: 1px solid #c4c4c4;
`;

export const UserBox = styled.div`
  display: flex;
  div {
    width: 22px;
    height: 22px;
    border: 1px solid red;
    border-radius: 25px;
    margin-right: 4px;
  }
  span {
    font-family: "SeoulHangang CEB";
    font-size: 18px;
    color: #000000;
  }
`;

export const TemplateBox = styled.div`
  display: flex;
  margin: 4px 19px;
  div {
    width: 15px;
    height: 15px;
    border: 1px solid blue;
    border-radius: 25px;
    margin-right: 4px;
  }
  span {
    font-family: "SeoulHangang CEB";
    font-size: 15px;
    color: #000000;
  }
`;
