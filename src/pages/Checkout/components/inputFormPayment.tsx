import { ButtonHTMLAttributes, ElementType } from "react";
import { Container } from "./styles";
import { Bank, CreditCard, Money } from "phosphor-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    name?: string;
    functionName?: string;
    title: string;
    icon: ElementType;
}

export function InputFormPayment({name, functionName, title, icon: Icon, ...rest}: ButtonProps) {
    return (
        <Container>       
            <button {...rest}><Icon />{title}</button>   
        </Container>
        
    )
}