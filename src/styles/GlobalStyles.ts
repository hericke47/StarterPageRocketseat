import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    background: rgb(18, 18, 20);
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Roboto', sans-serif;
  }

  /* :root {
    --rocketseat: #6633cc;
  } */
`;