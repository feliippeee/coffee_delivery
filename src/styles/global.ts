import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    :focus {
      outline: none;
    }
  }
  body {
    font-family: 'Baloo 2', cursive;
    background: ${(props) => props.theme['background-coffee']};
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, p {
    font-family: 'Roboto', sans-serif;
    
  }
  button {
    cursor: pointer;
    border: none;
    background: transparent;
  }
`;
