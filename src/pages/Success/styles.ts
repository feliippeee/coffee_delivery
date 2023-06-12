import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    padding: 80px 160px;

    > h1 {
        font-size: 2rem;
        font-family: 'Baloo 2';
        font-weight: 800;
        color: ${(props) => props.theme['yellow-dark']};
        line-height: 130%;

    }
    h2 {
        font-size: 20px;
        color: ${(props) => props.theme['base-text']};
    }
`;

export const Order = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
    `;

export const OrderInfo = styled.div`
    width: 526px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    border: solid linear-gradient(${props => props.theme['purple-dark']}, ${props => props.theme['yellow-dark']});
    
    padding: 40px;
    gap: 2rem;
    border-radius: 6px 36px;

    > div { 
        display: flex;
        flex-direction: row;
        gap: 12px;
        align-items: center;

        svg {
            font-size: 2rem;
            background: blue;
            border-radius: 50%;
            padding: 8px;
            color: ${(props) => props.theme.white};
        }
    }
`;


export const Information = styled.div`
    display: flex;
    flex-direction: column;

    p {
        line-height: 130%;
    }
`;