import { ShoppingCart } from "phosphor-react";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button, CartCircleQuantity } from "./styles";

interface CartProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size: number;
    backgroundColor: 'yellow-light' | 'purple-dark';
    color: 'yellow-dark' | 'white';
    children?: ReactNode;
}

export function ButtonCart({ size, backgroundColor='purple-dark', color, children, ...rest} : CartProps) {
    return (
        <Button {...rest} backgroundColor={backgroundColor} color={color}>
            <ShoppingCart size={size} weight="fill" />
            {children ?  (
                <CartCircleQuantity>            
                    {children}
                </CartCircleQuantity>
            ): ''}
        </Button>
    );
}