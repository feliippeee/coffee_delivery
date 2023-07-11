import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { Input } from "../../components/Input";
import {  
    CardCheckoutList, 
    CardWrapper, 
    CoffeeCardInfos, 
    Container, 
    ContainerWrapper,
    FormCart,
    FormInputs,
    GroupInputs, 
    Item, 
    ListCheckout, 
    MethodPayment, 
    ResumeCard, 
    SelectMethodPayment 
} from "./styles";

import { CardCheckout } from "../../components/CardCheckout";
import { useCart } from "../../hooks/useCart";
import { formatMoney } from "../../utils/formattedMoney";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { InputFormPayment } from "./components/inputFormPayment";
import { CoffeeCardContent } from "../../components/CoffeeCardContent";
import { useState } from "react";

const FRETE_CART = 3.5;


const ConfirmOrderValidadForm = zod.object({
    cep: zod.string().nonempty('Informe o cep').min(5, 'Verifique o cep, e tente novamente.'),
    road: zod.string().nonempty('Informe a rua').min(3),
    number: zod.string().nonempty('Informe o número'),
    complement: zod.string().optional(),
    city: zod.string().nonempty('informe a cidade'),
    district: zod.string().nonempty('Informe o bairro'),
    state: zod.string().nonempty('Informe o Estado'),
    })
    
 type ConfirmOrderValidadFormData = zod.infer<typeof ConfirmOrderValidadForm>

export function Checkout() {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<ConfirmOrderValidadFormData>({
        resolver: zodResolver(ConfirmOrderValidadForm)
    })
   
    const { cartItems,  cartItemsTotal, cartQuantity } = useCart()
    const cartTotal = FRETE_CART + cartItemsTotal;
    const [paymentPreference, setPaymentPreference] = useState('');

    const formattedItemsTotal = formatMoney(cartItemsTotal);
    const formattedCartTotal = formatMoney(cartTotal);
    const formattedDeliveryPrice = formatMoney(FRETE_CART);
    
    async function handleFormSubmit(data: ConfirmOrderValidadFormData) {
        console.log('dados',{data})
    }
   
    return (
        <Container>
            <FormCart onSubmit={handleSubmit(handleFormSubmit)}>
                <CoffeeCardInfos>
                    <h2>Complete seu pedido</h2>
                
                    <ContainerWrapper>

                    
                    <CoffeeCardContent 
                        icon={MapPin}
                        title="Endereço de Entrega"
                        subTitle="Informe o endereço onde deseja receber seu pedido"
                        
                    />
                   
                        <FormInputs>
                                 <Input 
                                    placeholder="Cep" 
                                    {...register('cep')}
                                    error={errors.cep?.message}
                                
                                />

                                <Input 
                                    type="text" 
                                    placeholder="Rua" 
                                    {...register('road')}
                                    error={errors.road?.message}
                                /> 
                                <GroupInputs>
                                     <Input                                         
                                        type="number" 
                                        placeholder="Número" 
                                        {...register('number')}
                                        error={errors.number?.message}
                                    /> 
                                    
                                    
                                     <Input  
                                        type="text" 
                                        placeholder="Complemento" 
                                        {...register('complement')}
                                    /> 
                                   
                                </GroupInputs>
                               
                                <GroupInputs>

                                    <Input  
                                        type='text'
                                        placeholder="Bairro" 
                                        {...register('district')}
                                        error={errors.district?.message}
                                    />

                                    <Input 
                                        
                                        type="text"
                                        placeholder="Cidade" 
                                        {...register('city')}
                                        error={errors.city?.message}
                                        />
                                                                            
                                    <Input 
                                        type='text'
                                        placeholder="UF" 
                                        {...register('state')}
                                        error={errors.state?.message}
                                       
                                    />
                                </GroupInputs> 
                                  {/* {errors.methodPayment?.message} arrumar a parte das validações dos inputs  */}
                        </FormInputs>
                    </ContainerWrapper>

                    <ContainerWrapper>
                        <MethodPayment>    
                            <CoffeeCardContent 
                                icon={CurrencyDollar}
                                title="Pagamento"
                                subTitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                            />
                        
                            <SelectMethodPayment>

                            <InputFormPayment 
                                icon={CreditCard}
                                title="Cartão de Crédito"
                                
                                />
                            <InputFormPayment 
                                icon={Money}
                                title="Cartão de Débito"
                                
                                />

                            <InputFormPayment 
                                icon={Bank}
                                title="Dinheiro"                            
                                />
                            </SelectMethodPayment>

                        </MethodPayment>
                </ContainerWrapper>   
                    
                
                </CoffeeCardInfos>

                {/* card da direita */}
                
                <CardCheckoutList>
                    <h2>Cafés selecionados</h2>
                        <CardWrapper>
                        {/* {cartItems.map(item => (
                            <CardCheckout 
                            key={item.id}
                            coffee={item}
                            />
                            
                            ) )} */}
                        <ResumeCard>
                            {/* <ListCheckout>
                                <Item>
                                    <h3>Total de itens</h3>
                                    <span>R$ {formattedItemsTotal}</span>
                                </Item>
                                <Item>
                                    <h3>Entrega</h3>
                                    <span>R$ {formattedDeliveryPrice}</span>
                                </Item>
                                <Item>
                                    <h3>Total</h3>
                                    <span>R$ {formattedCartTotal}</span>
                                </Item>
                            </ListCheckout> */}

                            <button type='submit'>Confirmar Pedido</button>
                        </ResumeCard>
                        </CardWrapper>
                </CardCheckoutList>
            </FormCart>
           
        </Container>
    )
}