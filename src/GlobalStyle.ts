import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bgPrimary};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'IBM Plex Serif', serif;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  button {
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
