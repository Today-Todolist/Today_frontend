import { ThemeProvider } from "styled-components";
import theme from "./style/Theme";
import RootRouter from "./router";
import GlobalStyle from "./style/GlobalStyle";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RootRouter />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
