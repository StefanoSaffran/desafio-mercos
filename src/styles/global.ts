import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  :root {
    --color-primary: #E53935;

    --color-text-primary: #212121;
    --color-text-secondary: #424242;
    --color-text-banner: #616161;
    --color-text-tertiary: #9E9E9E;
    --color-placeholder: #BDBDBD;

    --color-background: #fff;
    --color-background-banner: #F5F5F5;
    --color-border: #E0E0E0;

    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  #root {
    display: flex;
    justify-content: center;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    background: var(--color-background);
    transition: all 0.08s ease-in-out;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0px 1000px var(--color-background) inset;
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }

  body, input, button, textarea, input::placeholder, textarea::placeholder {
    font: 400 1.6rem Roboto, sans-serif;
    line-height: 20px;
    border: 0;
  }

  input::placeholder {
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--color-placeholder);
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

  @media (max-width: 420px) {
    :root {
      font-size: 55.5%;
    }
  }
`;
