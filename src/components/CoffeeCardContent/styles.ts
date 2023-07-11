import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 22px 2fr;
    gap: 8px;
    
    > svg {
        font-size: 22px;
        color: ${(props) => props.theme.colors['purple']};
    }

    > div {
        h3 {
            font-size: 16px;
            line-height: 20.8px;
            color: ${(props) => props.theme.colors['base-subtitle']};
        }
        p {
            color: ${(props) => props.theme.colors['base-text']};
            font-size: 14px;
            line-height: 18px;
            
        }
    } 

`;