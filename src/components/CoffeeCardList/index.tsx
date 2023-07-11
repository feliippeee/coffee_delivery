import { Amount, CoffeeCard, CoffeName, Container, FooterCard, ImgCoffee, Quantity, SubtitleCoffee, Tag } from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { ButtonCart } from "../ButtonCart";
import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { formatMoney } from "../../utils/formattedMoney";

export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}

interface CoffeeProps {
    coffee: Coffee;
}

export function CoffeeCardList({ coffee }: CoffeeProps) {
    const [ quantity, setQuantity ] = useState(1);
    const formattedPrice = formatMoney(coffee.price);
   
    const { addCoffeeToCart, cartItems} = useCart();
   
   
    function handleAddCart() {
        setQuantity(state => state + 1)
    }

    function handleSub() {
        setQuantity(state => state - 1)
    }


    function handleAddToCart() {
        const coffeeToAdd = {
            ...coffee,
            quantity,
        }
        addCoffeeToCart(coffeeToAdd)
    }
    console.log(cartItems)
       // const { addItemCart, subItemCart } = useContext(CartContext)
    return (
        <Container>
            <CoffeeCard key={coffee.id}>
                <ImgCoffee>
                    <img src={coffee.photo} alt="" />
                </ImgCoffee>
                <Tag>
                    <span>
                        {coffee.tags}
                    </span>
                </Tag>
                <CoffeName>
                    {coffee.name}
                </CoffeName>
                <SubtitleCoffee>
                    {coffee.description}
                </SubtitleCoffee>

                <FooterCard>
                    <Amount>
                        R$ 
                        <strong>
                            {formattedPrice}
                        </strong>
                    </Amount>
                    <div>
                    <Quantity>
                        <button  disabled={quantity <= 1} onClick={handleSub}>
                        <Minus size={14} />
                        </button>
                            <span>{quantity}</span> 
                        <button>
                            <Plus onClick={handleAddCart} size={14} />                    
                        </button>
                    </Quantity>
                    <ButtonCart
                        backgroundColor="purple-dark"
                        color="white"
                        size={20}
                        onClick={handleAddToCart}   
                    />
                    </div>
                    
                
                </FooterCard>
            </CoffeeCard>
        </Container>
    )
}