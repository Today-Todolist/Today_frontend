import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./Theme";

const GlobalStyle = createGlobalStyle`
  body {
    line-height: 1;
    font-family : 'Noto Sans KR', 'sans-serif';
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
`;

export default GlobalStyle;
