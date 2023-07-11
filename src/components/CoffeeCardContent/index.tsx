import { ElementType } from "react";
import { Container } from "./styles";

interface CoffeeCardProps {
    icon: ElementType;
    title: string;
    subTitle: string;
}
export function CoffeeCardContent({icon: Icon, title, subTitle}: CoffeeCardProps) {
    return (
        <Container>
            <Icon />
            <div>
                <h3>{title}</h3>
                <p>{subTitle}</p>
            </div>
    </Container>
    )
}