import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    max-width: 1440px;
`;

export const Content = styled.div`
   
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 10rem;
`;

export const Logo = styled.img`
   
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    
    gap: 0.75rem;
    color: ${(props) => props.theme.colors['purple-dark']};
    
    > div {
        display: flex;
        gap: 0.25rem;
        padding: 0.5rem;
        border-radius: 0.375rem;
        background: ${(props) => props.theme.colors['purple-light']};
        align-items: center;
    > span {
        font-size: 0.725rem;
        font-family: 'Roboto';
        font-weight: 400;
        line-height: 1.125rem;
       
        align-items: center;
    }
    }
    > button {
        padding: 0.5rem;
    }
`;

