import { ShoppingCart } from "phosphor-react";
import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";
import { Button, CartCircleQuantity } from "./styles";

interface CartProps{
    size: number;
    backgroundColor?: 'yellow-light' | 'purple-dark';
    color: 'yellow-dark' | 'white';
    children?: ReactNode;
}

export function ButtonCart({size, backgroundColor='purple-dark', color, children} : CartProps) {
    return (
        <Button  onClick={() => console.log("add cart")} backgroundColor={backgroundColor} color={color}>
            <ShoppingCart size={size} weight="fill" />
            {children ?  (
                <CartCircleQuantity>            
                    {children}
                </CartCircleQuantity>

            ): ''}
        </Button>
    );
}