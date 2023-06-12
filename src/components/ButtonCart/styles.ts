import styled, { css } from "styled-components";

interface Props{
    backgroundColor: 'yellow-light' | 'purple-dark';
    color: 'yellow-dark' | 'white';
}

export const Button = styled.button<Props>`

    display: flex;
    position: relative;
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

export const CartCircleQuantity = styled.span`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: -0.5rem;
    right: -0.5rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: ${ props => props.theme['yellow-dark']};
    color: ${ props => props.theme.white};

    font-family: 'Roboto';
    font-weight: bold;
    font-size: 0.75rem;
    line-height: 0.812rem;

`;
