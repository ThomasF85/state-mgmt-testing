import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --color-primary: #2196f3;
    --color-secondary: #00796b;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
