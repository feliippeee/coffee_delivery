import {Minus, Plus, Trash } from "phosphor-react";
import { ButtonGroup, Container, DetailsCard, Line } from "./styles";


import CoffeeExpressoTradicional from '../../assets/coffee-selected.png';

export function CardCheckout() {
    return (
        <Container>

           
           <DetailsCard>
           <div>
                <img src={CoffeeExpressoTradicional} alt="" />

                <div>
                <h3>Expresso Tradicional</h3>
                <ButtonGroup>
                <div>

                <button><Minus /></button><span>1</span><button><Plus /></button>
                </div>
                <button><Trash />Remover</button>
                </ButtonGroup>
                </div>
           </div>
                <span>RS 9,90</span> 

            </DetailsCard>
            <Line />

            
            
        </Container>
    )
}