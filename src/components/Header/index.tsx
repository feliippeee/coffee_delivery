import { Container, Content, Logo, Actions  } from './styles';
import logoImg from '../../assets/logo.png'
import { ButtonCart } from '../ButtonCart';
import { MapPin } from 'phosphor-react';
export function Header() {
    return (
        <Container>
            <Content>
                <Logo src={logoImg} />
                <Actions>
                    <div>
                    <MapPin size={22} weight="fill" />
                       <span>
                            Porto Alegre, RS
                        </span>
                    </div>
                    <ButtonCart color="yellow-dark" backgroundColor="yellow-light" size={22} />
                </Actions>
            </Content>
        </Container>
    );
}