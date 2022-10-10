import { ShoppingCart } from "phosphor-react";
import { Circle, Container } from "./styles";

export interface Itemprops {
    text: string;
    backgroundColor: "purple" | 'yellow-dark' | 'base-text' | 'yellow';
}

export function CoffeeItem({ text, backgroundColor}: Itemprops) {
    
    return (
        <Container>
            <Circle backgroundColor={backgroundColor}>
                <ShoppingCart size={16} weight="fill" />
            </Circle>
            {text}
        </Container>
    )
}