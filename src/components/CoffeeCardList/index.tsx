import { Amount, CoffeeCard, CoffeName, Container, FooterCard, ImgCoffee, Quantity, SubtitleCoffee, Tag } from "./styles";
import CoffeeExpressoTradicional from '../../assets/expresso-tradicional.png';
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { ButtonCart } from "../ButtonCart";

export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}

interface CoffeeProps {
    coffee : Coffee;
}

export function CoffeeCardList({ id,
    tags,
    name,
    description,
    photo,
    price}: Coffee) {
    return (
        <Container>
            <CoffeeCard>
                <ImgCoffee>
                    <img src={photo} alt="" />
                </ImgCoffee>
                <Tag>
                    <span>
                        {tags}
                    </span>
                </Tag>
                <CoffeName>
                    {name}
                </CoffeName>
                <SubtitleCoffee>
                    {description}
                </SubtitleCoffee>

                <FooterCard>
                    <Amount>
                        R$ 
                        <strong>
                            {price}
                        </strong>
                    </Amount>
                    <div>

                    <Quantity>
                        <Minus onClick={() => console.log("menos um")} size={14} /><span>1</span> <Plus onClick={() => console.log("mais um")} size={14} />                    
                    </Quantity>
                    <ButtonCart color="white" size={20} />
                    </div>
                    
                
                </FooterCard>
            </CoffeeCard>
        </Container>
    )
}