import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./Theme";

const GlobalStyle = createGlobalStyle`
  body {
    line-height: 1;
    font-family: "SeoulHangangEB";
  font-size: ${fonts.body3};
    color: ${colors.grayscale.white}; 
    background: ${colors.grayscale.lightGray1};
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }  
  ::-webkit-scrollbar {
    width: 9px;
    height: 10px;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: white;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #6C6C6C;
  }
`;

export default GlobalStyle;
