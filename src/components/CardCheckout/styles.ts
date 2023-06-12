import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        flex-direction: column;
        font-size: 1rem;

        line-height: 20px;
        > span {
            color: ${(props) => props.theme['base-text']};
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
                color: ${(props) => props.theme['base-subtitle']};
                font-weight: 400;
                margin-bottom: 8px;
                
            }
        }
`;

export const DetailsCard = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 40px 40px 40px 40px;
        font-size: 1rem;

        line-height: 20px;
        > span {
            color: ${(props) => props.theme['base-text']};
            font-weight: bold;
            text-align: right;
            font-size: 1rem;
            line-height: 20.8px;
        }
       
        img {
           width: 64px;
           height: 64px;

        }

       > div {
        
            display: flex;
            gap: 1.25rem;
       
            h3 {
                font-size: 16px;
                line-height: 13px;
                color: ${(props) => props.theme['base-subtitle']};
                font-weight: 400;
                padding-bottom: 8px;
                
            }
        }
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 8px;
    > div {
        display: flex;
        background: ${(props) => props.theme['base-button']};
        border-radius: 6px;
        align-items: center;
        > span {
            font-size: 1rem;
            font-weight: 400;
            line-height: 20.8px;
            color: ${(props) => props.theme['base-title']};
            font-family: 'Roboto';
        }
    }
    
    button {
        width: 100%;
        display: flex;
            justify-content: center;
            align-items: center;
            background: ${(props) => props.theme['base-button']};
            cursor: pointer;
            font-size: 12px;
            gap: 12px;
            font-family: 'Roboto';
            padding: 8px;
            color: ${(props) => props.theme['base-text']};
            font-weight: 400;
            line-height: 16px;
            border: 0;
            border-radius: 6px;
            text-transform: uppercase;

        > svg {
            font-size: 1rem;
    
            color: ${(props) => props.theme['purple']};
        }
            
    }
            
`;

export const Line = styled.div`
    border: 1px solid ${(props) => props.theme['base-button']};
    margin: 0 24px;   
`;
