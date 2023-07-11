import { Container, Information, Order, OrderInfo } from "./styles";
import Illustration from '../../assets/Illustration.png';
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../context/contextData";

interface Props {
    background: string;
}

export function Success() {
   const theme = useTheme()
   const { name, idade } = useContext(CartContext)
    return (
        <Container>
            <h1>Uhu! Pedido confirmado</h1>
            <h2>Agora é só aguardar que logo o café chegará até você</h2>

            <Order>

            <OrderInfo>
                <div>
                    <MapPin />
                    <Information>
                        <p>Entrega em {name} <strong>Rua João Daniel Martinelli, 102</strong></p> 
                        <p>Farrapos - Porto Alegre, RS</p>
                    </Information>
                </div>
                <div>

                    <Timer />
                    <Information>
                        <p>Previsão de entrega</p>
                        <p><strong>20 min - 30 min</strong></p>
                    </Information>

                </div>
                <div>
                    <CurrencyDollar />
                    <Information>
                        <p>Pagamento na entrega</p>
                        <p><strong>Cartão de Crédito</strong></p>
                    </Information>
                </div>
            </OrderInfo>
            
            <img src={Illustration} alt="" />
            </Order>
        </Container>
    )
}