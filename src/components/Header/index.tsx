import { Container, Content, Logo, Actions } from './styles';
import logoImg from '../../assets/logo.png'
import { ButtonCart } from '../ButtonCart';
import { MapPin } from 'phosphor-react';
import { useCart } from '../../hooks/useCart';
import { NavLink } from 'react-router-dom';
export function Header() {
    const cart = [{cart: 1}];
    const {cartQuantity} = useCart()
    return (
        <Container>
            <Content>
                <NavLink to="/">
                    <Logo src={logoImg} />
                </NavLink>
                <Actions>
                    <div>
                    <MapPin size={22} weight="fill" />
                       <span>
                            Porto Alegre, RS
                        </span>
                    </div>
                    <NavLink to="/checkout">
                        <ButtonCart color="yellow-dark" backgroundColor="yellow-light" size={22} children={cartQuantity} />                    
                    </NavLink>
                   
                </Actions>
            </Content>
        </Container>
    );
}