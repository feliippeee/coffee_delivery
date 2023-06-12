import styled, { css } from "styled-components";

type Props = {
    tamanho: string;
}
export const Container = styled.div`
   
`;
export const InputContainer = styled.input<Props>`
    ${({tamanho}) => css`
        width: ${tamanho}px;
    ` };
`;