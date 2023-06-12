import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 1rem;
    //margin-bottom: 2rem;
    margin: 2.5rem 10rem;
`;

export const CoffeeCardInfos = styled.div`
    display: flex;
    flex-direction: column;  
    justify-content: center;
    padding-bottom: 1rem;
    
    > h2 {
        margin-bottom: 15px;
    }
`;

export const ContainerWrapper = styled.div`
    border-radius: 6px;
    background: ${(props) => props.theme['base-card']};
    margin-bottom: 1rem;
`;

export const CoffeeText = styled.div`
    gap: 12px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 2.5rem 2.5rem 32px 2.5rem;
    
    > div { 
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        font-weight: 400;
        align-items: flex-start;
        align-self: flex-start;

        > h3 {
            font-size: 16px;
            line-height: 20.8px;
            color: ${(props) => props.theme['base-subtitle']};
        }
        > p {
            color: ${(props) => props.theme['base-text']};
            font-size: 14px;
            line-height: 18px;
            
        }
    }

`;

export const Inputs = styled.div`
    padding:  0 2.5rem 2.5rem 2.5rem;
    margin-bottom: 0.75rem;
    form {
        display: flex;
        gap: 1rem;
        flex-direction: column;
    }

    input {
        height: 2.625rem;
        background: ${(props) => props.theme['base-input']};
        border: 1px solid ${(props) => props.theme['base-button']};
        border-radius: 0.25rem;
        padding: 0.75rem;
    }
`;

export const GroupInputs = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
`;

export const BottomFooter = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 1rem;
    
    div {
        padding: 0 2.5rem 2.5rem 2.5rem;
        width: 100%;
        justify-content: space-around;
        gap: 0.75rem;
        display: flex;
        background: ${(props) => props.theme['base-card']};
        
        button {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            font-size: 0.75rem;
            gap: 0.75rem;
            font-family: 'Roboto';
            padding: 1rem;
            background: ${(props) => props.theme['base-button']};
            color: ${(props) => props.theme['base-text']};
            font-weight: 400;
            line-height: 1rem;
            border: 0;
            border-radius: 0.375rem;
            text-transform: uppercase;

            svg {
                color: ${(props) => props.theme['purple-dark']};
                width: 1rem;
                height: 1rem;
            }
        }
    }
`;

export const CardCheckoutList = styled.div`
       
        > h2 {
        margin-bottom: 0.937rem;
    }
`;

export const ResumeCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem 2.5rem 2.5rem 2.5rem;

    button {
        width: 100%;
        padding: 0.75rem 0.5rem;
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 1rem;
        
        text-transform: uppercase;

        border-radius: 0.375rem;
        color: ${(props) => props.theme.white};
        background: ${(props) => props.theme['yellow']};
        border: 0;
       
    }
`;

export const ListCheckout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    font-weight: 400;

    color: ${(props) => props.theme['base-text']};
   
    span {
        font-size: 1rem;
    }    
`;

export const CardWrapper = styled.div`
    border-radius: 6px 44px;
    background: ${(props) => props.theme['base-card']};
`;