import styled from "styled-components";

export const ResetBox = styled.div`
  height: 275px;
`;

export const ResetContent = styled.div`
  margin-bottom: 20px;
`;

export const TitleBox = styled.div`
  display: flex;
  margin-bottom: 19px;
  padding: 10px 8px 0px;
`;

export const Title = styled.div`
  font-family: "SeoulHangang CEB";
  font-size: 25px;
  color: #000000;
`;

export const SubTitle = styled.div`
  font-family: "SeoulHangang CEB";
  font-size: 20px;
  color: #848484;
  margin: 6px 10px;
`;

export const InputBox = styled.div`
  margin-top: 15px;
  display: flex;
`;

export const Input = styled.input`
  width: 329px;
  padding: 2px 8px;
  height: 30px;
  background: #ffffff;
  border: 1px solid #ebedf0;
  border-radius: 30px;
`;

export const ResetBtn = styled.div`
  width: fit-content;
  height: 22px;
  color: #ffffff;
  background: #000000;
  border-radius: 15px;
  margin-left: 21px;
  margin-top: 4px;
  padding: 3px 8px;
  font-size: 8px;
  text-align: center;
`;

export const DeleteTitle = styled(Title)`
  color: red;
`;

export const DeleteBtn = styled(ResetBtn)`
  background: red;
`;
