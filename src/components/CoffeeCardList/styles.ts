import styled from 'styled-components';


export const Container = styled.div`
    max-width: 1140px;
    `;

export const CoffeeCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 310px;
    width: 256px;
    background: ${(props) => props.theme['base-card']};
    border-radius: 0.375rem 2.25rem;    
`;

export const Tag = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 0.75rem;
    margin-bottom: 1rem;
    justify-content: center;
    font-family: 'Roboto';
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 0.75rem;
    span {
        display: flex;
        flex-direction: row;
        gap: 12px;
        background: ${(props) => props.theme['yellow-light']};
        color: ${(props) => props.theme['yellow-dark']};
        padding: 0.25rem 0.5rem;
        border-radius: 1rem;
        text-transform: uppercase;

    }
    

`;
export const CoffeName = styled.h2`
    font-family: 'Baloo 2';
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    text-align: center;
    color: ${(props) => props.theme['base-subtitle']}
`;
export const SubtitleCoffee = styled.h3`
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: ${(props) => props.theme['base-label']};
    text-align: center;

    margin: 8px 20px 33px 20px;
`;
export const ImgCoffee = styled.div`
   display: flex;
   justify-content: center;
   img { 
        margin-top: -20px; ;      
    }
`;
export const Amount = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto';
    font-size: 14px;

    strong {
        font-family: 'Baloo 2';
        font-size: 24px;
        font-weight: 800;
        line-height: 31.2px;
        text-align: right;
        color: ${(props) => props.theme['base-text']};
    }
`;
export const FooterCard = styled.div`
    display: flex;
    justify-content: space-around;
    > div {
        display: flex;
        flex-direction: row;
        gap: 8px;
    }
   
`;

export const Quantity = styled.div`
        display: flex;
        flex-direction: row;
        gap: 4px;
        justify-content: center;
        align-items: center;
        background: ${(props) => props.theme['base-button']};
        padding: 8px;
        border-radius: 6px;
        color: ${(props) => props.theme['purple']};
        
        span {
            margin: 0 4px;
            font-family: 'Roboto';
            color: ${(props) => props.theme['base-title']};

        }
     
`;