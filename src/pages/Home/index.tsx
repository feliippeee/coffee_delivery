import { Container, HeaderContainer, Title, SubTitle, ColumnLeft, Content, ContainerTitles, CardArea, TitleHome, Card } from './styles';
import bannerImg from '../../assets/banner.png';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { CoffeeCardList } from '../../components/CoffeeCardList';
import { CoffeeItem } from '../../components/CoffeeItem';
export function Home() {
    return (
        <Container>
            <HeaderContainer>

            <Content>
                <ColumnLeft>
                <ContainerTitles>
                    <Title>
                        Encontre o café perfeito {' '}para qualquer hora do dia
                    </Title>
                    <SubTitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</SubTitle>
                </ContainerTitles>
                <CardArea>
                    <CoffeeItem backgroundColor="yellow-dark" text="Compra simples e segura" />
                    <CoffeeItem backgroundColor="base-text" text="Embalagem mantém o café intacto" />
                    <CoffeeItem backgroundColor="yellow" text="Entrega rápida e rastreada" />
                    <CoffeeItem backgroundColor="purple" text="O café chega fresquinho até você" />

                   
                </CardArea>
                </ColumnLeft>

               <div>
                     <img src={bannerImg} alt="" />
               </div>

                
            </Content>

            </HeaderContainer>
            <TitleHome>
                Nossos Cafés
            </TitleHome>
            <Card>

            <CoffeeCardList tag={"Expresso"} />
            <CoffeeCardList tag={"expresso"} />
            <CoffeeCardList tag="expresso" />
            <CoffeeCardList tag="expresso" />
            <CoffeeCardList tag="expresso" />
            <CoffeeCardList tag="expresso" />
            <CoffeeCardList tag="expresso" />
            <CoffeeCardList tag="expresso" />

            </Card>
        
        </Container>
    )
}