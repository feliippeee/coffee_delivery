import styled, { css,  } from "styled-components";

interface Props{
    backgroundColor: 'yellow-light' | 'purple-dark';
    color: 'yellow-dark' | 'white';
}

export const Button = styled.button<Props>`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background: ${({backgroundColor, theme}) => css`
        ${backgroundColor  && theme[backgroundColor]};       
        `};
    
    color: ${({color, theme}) => css`
    ${color && theme[color]};`

};
     
    border: none;
    border-radius: 0.375rem;
    margin-left: 0.5rem;
    

`;