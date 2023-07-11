import {Minus, Plus, Trash } from "phosphor-react";
import { ButtonGroup, CardQuantity, CoffeeButton, CoffeeImage, Container, DetailsCard, Line } from "./styles";


import CoffeeExpressoTradicional from '../../assets/coffee-selected.png';
import { Coffee } from "../CoffeeCardList";
import { formatMoney } from "../../utils/formattedMoney";
import { CartItem } from "../../context/contextData";
import { useCart } from "../../hooks/useCart";

interface CoffeeCartCardProps {
    coffee: CartItem;
}

export function CardCheckout({coffee} : CoffeeCartCardProps) {
    const coffeeTotal = coffee.price * coffee.quantity
    const formattedPrice = formatMoney(coffeeTotal)
    const { changeCartItemQuantity, removeCartItem} = useCart();

    

    function handleAdd() {
        changeCartItemQuantity(coffee.id, 'add');
    }
    function handleSub() {
        changeCartItemQuantity(coffee.id, 'sub');
    }
    function handleRemove() {
        removeCartItem(coffee.id)
    }
    return (
        <Container>           
           <DetailsCard>
                <CoffeeImage>
                    <img src={coffee.photo} alt="" />
                </CoffeeImage>

                <div>
                    <h3>{coffee.name}</h3>
                    <ButtonGroup>
                        <CardQuantity>
                            <CoffeeButton onClick={handleSub}>
                                <Minus />
                            </CoffeeButton>
        
                            <div>
                                <span>{coffee.quantity}</span>
                            </div>

                            <CoffeeButton onClick={handleAdd}>
                                <Plus />
                            </CoffeeButton>
                        </CardQuantity>
                        <CoffeeButton onClick={handleRemove}>
                            <Trash />
                            Remover
                        </CoffeeButton>
                    </ButtonGroup>
                </div>
           
                <span>R$ {formattedPrice}</span> 
            </DetailsCard>

            <Line />
            
        </Container>
    )
}