import { InputHTMLAttributes } from "react";
import { Container, InputContainer } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    tamanho?: string;
}

export function Input({tamanho = '100%', ...rest}: Props) {
    return (
        
            <InputContainer {...rest} tamanho={tamanho} />
        
    )
}