import { produce } from "immer";
import { ReactNode, createContext, useState } from "react";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

export interface CartItem extends Coffee {
  quantity: number;
}

export interface CartContextProps {
    cartItems: CartItem[];
    cartItemsTotal: number;
    cartQuantity: number;
    addCoffeeToCart: (coffee: CartItem) => void;
    changeCartItemQuantity: (CartItemId: number, type: "add" | 'sub') => void;
    removeCartItem: (cartItemId: number) => void;
  }

  interface CartContextProvider {
    children: ReactNode; 
  }
  
  export const CartContext = createContext({} as CartContextProps)
  

  export function CartContextProvider({children}: CartContextProvider) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    
    const cartQuantity = cartItems.length;

    const cartItemsTotal = cartItems.reduce((total, cartItem) => {
      return total + cartItem.price * cartItem.quantity;
    }, 0)
    
    function addCoffeeToCart(coffee: CartItem) {
      const coffeeAlreadyExistsInCart = cartItems.findIndex(cartItem => cartItem.id === coffee.id)
      const newCart = produce(cartItems, (draft) => {
        if(coffeeAlreadyExistsInCart < 0) { //verificação se já existe café
          draft.push(coffee) //não existindo coloca ele no array
        } else {
          draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity; //caso já exista, soma somente a quatidade
        }
      })

      setCartItems(newCart)
    }

    function changeCartItemQuantity(
      cartItemId: number,
      type: 'add' | 'sub',
    ) {
      const newCart = produce(cartItems, (draft) => {

        const coffeeExistsInCart = cartItems.findIndex(
          (cartItem) => cartItem.id === cartItemId)
  
          if(coffeeExistsInCart >= 0) {
            const item = draft[coffeeExistsInCart];
            draft[coffeeExistsInCart].quantity =
            type === 'add' ? item.quantity + 1 : item.quantity -1;
  
          }
      })
      setCartItems(newCart)
    }

    function removeCartItem(cartItemId: number) {
      const newCart = produce(cartItems,(draft) => {
        const coffeeExistsInCart = cartItems.findIndex(
          (cartItem) => cartItem.id === cartItemId
        )

        if (coffeeExistsInCart >= 0) {
          draft.splice(coffeeExistsInCart, 1) // removendo do array

        }
      })
      setCartItems(newCart);
    }

    return (
      <CartContext.Provider value={{
        cartItems, 
        cartQuantity, 
        addCoffeeToCart, 
        changeCartItemQuantity, 
        removeCartItem,
        cartItemsTotal
      }}>{children}</CartContext.Provider>
    )

  }
