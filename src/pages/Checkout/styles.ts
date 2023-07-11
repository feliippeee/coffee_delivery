import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
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

export const FormCart = styled.form`
    display: grid;
    grid-template-columns: 40rem 28rem;
    gap: 2rem;
`;

export const ContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    border-radius: 6px;
    background: ${(props) => props.theme.colors['base-card']};
    padding: 2.5rem;
    margin-bottom: 1rem;
   
`;

export const SelectMethodPayment = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    
`;

export const FormInputs = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    padding:  0 2.5rem 2.5rem 0;
    margin-bottom: 0.75rem;
`;

export const GroupInputs = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
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
        color: ${(props) => props.theme.colors.white};
        background: ${(props) => props.theme.colors['yellow']};
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

    color: ${(props) => props.theme.colors['base-text']};
   
    span {
        font-size: 1rem;
    }    
`;

export const CardWrapper = styled.div`
    border-radius: 6px 44px;
    background: ${(props) => props.theme.colors['base-card']};
`;

export const MethodPayment = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
   
`;

