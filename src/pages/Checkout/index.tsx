import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { Input } from "../../components/Input";
import { BottomFooter, CardCheckoutList, CardWrapper, CoffeeCardInfos, CoffeeText, Container,ContainerWrapper,GroupInputs, Inputs, Item, ListCheckout, ResumeCard } from "./styles";

import { CardCheckout } from "../../components/CardCheckout";


export function Checkout() {
    return (
        <Container>
           <CoffeeCardInfos>
            <h2>Complete seu pedido</h2>
        

            <CoffeeText>
                <MapPin />
                <div>
                    <h3>Endereço de Entrega</h3> 
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>

            </CoffeeText>
                <Inputs>
                    <form action="">
                        <Input tamanho="200" placeholder="Cep" />
                        <Input tamanho="560" type="text" placeholder="Rua" />
                        <GroupInputs>

                        <Input tamanho="200" type="text" placeholder="Número" />
                        <Input tamanho="348" type="text" placeholder="Complemento" />
                        </GroupInputs>
                        <GroupInputs>

                        <Input tamanho="200" placeholder="Bairro" />
                        <Input tamanho="276" placeholder="Cidade" />
                        <Input tamanho="60" placeholder="UF" />
                        </GroupInputs>
                    </form>
                </Inputs>

            <CoffeeText>
                <CurrencyDollar />
                <div>
                <h3>Pagamento</h3>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>

            </CoffeeText>
                <BottomFooter>
                    <div>
                        <button><CreditCard />Cartão de Crédito</button>
                        <button><Bank />Cartão de Débito</button>
                        <button><Money />Dinheiro</button>
                    </div>
                </BottomFooter>
        
           </CoffeeCardInfos>
           
           <CardCheckoutList>
            <h2>Cafés selecionados</h2>
                <CardWrapper>

                <CardCheckout />
                <CardCheckout />
                <ResumeCard>
                    <ListCheckout>
                        <Item>
                            <h3>Total de itens</h3>
                            <span>R$ 30,00</span>
                        </Item>
                        <Item>
                            <h3>Entrega</h3>
                            <span>R$ 3,00</span>
                        </Item>
                        <Item>
                            <h3>Total</h3>
                            <span>R$ 33,00</span>
                        </Item>
                    </ListCheckout>

                    <button>Confirmar Pedido</button>
                </ResumeCard>
                </CardWrapper>
           </CardCheckoutList>
           
        </Container>
    )
}