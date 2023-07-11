import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        width: 448px;
        flex-direction: column;
        font-size: 1rem;
        

        line-height: 20px;
        > span {
            color: ${(props) => props.theme.colors['base-text']};
            font-weight: bold;
            text-align: right;
            font-size: 1rem;
            line-height: 20.8px;
        }
             
       > div {
        
            display: flex;
            gap: 1.25rem;
       
            h3 {
                font-size: 1rem;
                line-height: 13px;
                color: ${(props) => props.theme.colors['base-subtitle']};
                font-weight: 400;
                margin-bottom: 8px;
                
            }
        }
`;

export const CardContent = styled.div`
    img {
           width: 64px;
           height: 64px;

        }

        > input {
            color: ${(props) => props.theme.colors['base-text']};
            font-weight: bold;
            text-align: right;
            font-size: 1rem;
            line-height: 20.8px;
        }
`

export const DetailsCard = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 40px;
        font-size: 1rem;

        line-height: 20px;
       
        img {
           width: 64px;
           height: 64px;

        }


        `;
       
        

       /* > div {
        
            display: flex;
            gap: 1.25rem;
       
            h3 {
                font-size: 16px;
                line-height: 13px;
                color: ${(props) => props.theme.colors['base-subtitle']};
                font-weight: 400;
                padding-bottom: 8px;
                
            }
        }
            */
         
export const CoffeeImage = styled.div`
        width: 64px;
        height: 64px;
    img {
        width: 100%;
    }
`;
export const CoffeeButton = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.colors['base-button']};
    cursor: pointer;
    font-size: 12px;
    gap: 4px;
    font-family: 'Roboto';
    padding: 8px;
    color: ${(props) => props.theme.colors['base-text']};
    font-weight: 400;
    line-height: 16px;
    border: 0;
    border-radius: 6px;
    text-transform: uppercase;
    
    > svg {
        font-size: 1rem;
        
        color: ${(props) => props.theme.colors['purple']};
    }
`;

export const CoffeeName = styled.div``;

export const CoffeeInput = styled.div``;

export const CardQuantity = styled.div`
     display: flex;
    background: ${(props) => props.theme.colors['base-button']};
    border-radius: 6px;
    align-items: center;
    > span {
        font-size: 1rem;
        font-weight: 400;
        line-height: 20.8px;
        color: ${(props) => props.theme.colors['base-title']};
        font-family: 'Roboto';
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 8px;    
            
    `;

/*
*/
export const Line = styled.div`
    border: 1px solid ${(props) => props.theme.colors['base-button']};
    margin: 0 24px;   
`;