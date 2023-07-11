import styled from "styled-components";

export const Container = styled.div`
    
   
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 1rem;
    
    /* div {
        padding: 0 2.5rem 2.5rem 2.5rem;
        width: 100%;
        justify-content: space-around;
        gap: 0.75rem;
        display: flex;
        background: ${(props) => props.theme.colors['base-card']};
     */
    
        svg {
            color: ${(props) => props.theme.colors['purple-dark']};
            width: 1rem;
            height: 1rem;
        }
        button {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            font-size: 0.75rem;
            gap: 0.75rem;
            font-family: 'Roboto';
            padding: 1rem;
            background: ${(props) => props.theme.colors['base-button']};
            color: ${(props) => props.theme.colors['base-text']};
            font-weight: 400;
            line-height: 1rem;
            border: 0;
            border-radius: 0.375rem;
            text-transform: uppercase;

            
        }
    /* }   */
`;