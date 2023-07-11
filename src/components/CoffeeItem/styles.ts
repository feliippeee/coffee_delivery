import styled, { css } from "styled-components";

interface Props {
    backgroundColor: 'purple' | 'yellow-dark' | 'base-text' | 'yellow';
}

export const Container = styled.div`
     
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    color: ${(props) => props.theme.colors['base-text']};
    font-size: 1rem;
    font-family: 'Roboto';
    align-items: center;
    
    `;

export const Circle = styled.div<Props>`
    display: flex;
    background: blue;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    color: ${(props) => props.theme.colors['background-coffee']};
     background: ${({backgroundColor, theme}) => css`
        ${backgroundColor  && theme.colors[backgroundColor]};       
        `};
    `;
