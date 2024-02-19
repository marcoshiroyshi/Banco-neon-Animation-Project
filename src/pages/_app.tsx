import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#FFF",
    primary: "#fafafa",
    blue: "#0073CE",
    lightBlue: "#00A5F0",
    green: "#00D7D7",
    yellow: "#00D7D7",
    gray600: "#33303E",
    gray500: "#4E4B59", 
    gray400: "#5F5C6B", 
    gray300: "#5F5C6B", 
    gray200: "#C6C5CE", 
    gray100: "#F1F0F5", 

  },
  
};

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-size: 10px;
  box-sizing: border-box;
  
  
}

body{
  font-size: 10px;
  font-family: "Poppins", sans-serif;
  width: 100%;
  
}

h1, h2 {
  line-height: 112%;
  letter-spacing: -1px;
  color: ${theme.colors.gray500}
}

h3, h4 {
  line-height: 158%;
  letter-spacing: -0.5px;
  color: ${theme.colors.gray500};
  font-weight: 500;
}

h1 {
  font-size: 6.4rem;
  font-weight: bold;
  line-height: 112%;
  letter-spacing: -1px;
}

h2 {
  font-size: 4rem;
  font-weight: bold;
}

h3 {
  font-size: 2.4rem;
  font-weight: bold;
  
}

h4 {
  font-size: 1.8rem;
  font-weight: bold;
  
}
`;


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}