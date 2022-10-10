import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :focus {
            outline: 0;
            background: ${(props) => props.theme['yellow-dark']};
        }
  }
  body {
    font-family: 'Roboto', sans-serif;
     background: ${(props) => props.theme['background-coffee']};
  }
  h1, h2, h3, p {
    font-family: 'Baloo 2', cursive;
    
  }
`;