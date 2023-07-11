import { Container, HeaderContainer, Title, SubTitle, ColumnLeft, Content, ContainerTitles, CardArea, TitleHome, Card, ImageBanner } from './styles';
import bannerImg from '../../assets/banner.png';
import { CoffeeCardList } from '../../components/CoffeeCardList';
import { CoffeeItem } from '../../components/CoffeeItem';
import { coffees } from '../../data';
import { CartContext } from '../../context/contextData';
import { useCart } from '../../hooks/useCart';

export function Home() {
    const {cartItems } = useCart()
    
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

               <ImageBanner src={bannerImg} alt="" />
                 
                
            </Content>

            </HeaderContainer>
            <TitleHome>
                Nossos Cafés
            </TitleHome>
            <Card>
            {coffees.map((coffee) => (
                <CoffeeCardList 
                key={coffee.id}
                coffee={coffee}
                
                
                />
            ))}
           
            </Card>
        
        </Container>
    )
}