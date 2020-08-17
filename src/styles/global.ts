import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background: #fff;
    -color-background-banner: #F5F5F5;
    --color-primary: #E53935;
    --color-text-primary: #212121;
    --color-text-secondary: #4C4C4C;
    --color-text-tertiary: #9E9E9E;
    --color-text-banner: #616161;
    --color-placeholder: #BDBDBD;
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

  body, input, button, textarea, input::placeholder, textarea::placeholder {
    font: 400 1.6rem Roboto, sans-serif;
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
