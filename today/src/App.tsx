import { ThemeProvider } from "styled-components";
import theme from "./style/Theme";
import RootRouter from "./router";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RootRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
