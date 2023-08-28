import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --vh : 100%;
  }

  body {
    padding: 0;
    margin: 0;
    color: #111;
    font-family: 'NanumBarunGothic';
  }
  div {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, p, span {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle;