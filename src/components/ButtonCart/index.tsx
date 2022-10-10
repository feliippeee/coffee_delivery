import { ShoppingCart } from "phosphor-react";
import { DefaultTheme } from "styled-components";
import { Button } from "./styles";

interface CartProps{
    size: number;
    backgroundColor?: 'yellow-light' | 'purple-dark';
    color: 'yellow-dark' | 'white';
}

export function ButtonCart({size, backgroundColor='purple-dark', color} : CartProps) {
    return (
        <Button backgroundColor={backgroundColor} color={color}>
            <ShoppingCart size={size} weight="fill" />
        </Button>
    );
}