import styled from "styled-components";

export const MyProfileContainer = styled.div`
  width: 307px;
  margin: 33px 25px;
`;

export const MyProfileContent = styled.div`
  width: 307px;
`;

export const ProfileBox = styled.div`
  width: 307px;
  display: flex;
`;

export const Profile = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 35px;
  border: 1px solid red;
  margin-right: 5px;
`;

export const Name = styled.div`
  font-family: "SeoulHangang CEB";
  font-size: 30px;
  line-height: 30px;
  color: #000000;
`;

export const Email = styled.div`
  font-family: "SeoulHangang CEB";
  font-size: 20px;
  line-height: 20px;
  color: #000000;
`;

export const SortBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  span {
    margin-left: 4px;
  }
`;

export const SetBox = styled.div`
  width: 81.2px;
  height: 22.15px;
  background: #000000;
  border-radius: 15px;
  font-family: "SeoulHangang CEB";
  font-size: 15px;
  text-align: center;
  color: #ffffff;
  padding-top: 3px;
`;

export const SearchContent = styled.div`
  width: 262.89px;
  height: 27.19px;
  padding: 5px 9px;
  background: #000000;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  img {
    width: 15px;
    height: 15px;
  }
`;

export const SearchInput = styled.input`
  width: 213.15px;
  height: 15px;
  border: none;
  outline: none;
  color: #ffffff;
  background: #000000;
  font-size: 10px;
`;

export const TemplateBtn = styled.div`
  width: 27.41px;
  height: 27.19px;
  background: #000000;
  border-radius: 25px;
`;

export const TemplatList = styled.div`
  margin-top: 15px;
  height: 700px;
  padding-left: 10px;
`;

export const Templat = styled.div`
  display: flex;
  margin-bottom: 9px;
  img {
    width: 15.23px;
    height: 15.1px;
    background: url(image.png);
    border-radius: 5px;
    border: 1px solid red;
    margin-right: 4px;
  }
  span {
    font-family: "SeoulHangang CEB";
    font-size: 15px;
    color: #000000;
  }
`;
