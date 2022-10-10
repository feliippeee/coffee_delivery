import { Amount, CoffeeCard, CoffeName, Container, FooterCard, ImgCoffee, Quantity, SubtitleCoffee, Tag } from "./styles";
import CoffeeExpressoTradicional from '../../assets/expresso-tradicional.png';
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { ButtonCart } from "../ButtonCart";
interface CoffeeProps {
    tag: string | string[];
}[];

export function CoffeeCardList({tag}: CoffeeProps) {
    return (
        <Container>
            <CoffeeCard>
                <ImgCoffee>
                    <img src={CoffeeExpressoTradicional} alt="" />
                </ImgCoffee>
                <Tag>
                    <span>
                        {tag}
                    </span>
                </Tag>
                <CoffeName>
                    Expresso Tradicional
                </CoffeName>
                <SubtitleCoffee>
                    O tradicional café feito com água quente e grãos moídos
                </SubtitleCoffee>

                <FooterCard>
                    <Amount>
                        R$ 
                        <strong>
                            9,90
                        </strong>
                    </Amount>
                    <div>

                    <Quantity>
                        <Minus size={14} /><span>1</span> <Plus size={14} />                    
                    </Quantity>
                    <ButtonCart color="white" size={20} />
                    </div>
                    
                
                </FooterCard>
            </CoffeeCard>
        </Container>
    )
}