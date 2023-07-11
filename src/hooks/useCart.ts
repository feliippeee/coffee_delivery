import { useContext } from "react";
import { CartContext } from "../context/contextData";

export function useCart() {
    const context = useContext(CartContext);
    return context;
}