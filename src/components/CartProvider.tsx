import { CartItem } from "@/pages/cart"
import { createContext, useContext, useReducer, useState } from "react"

import { cartReducer, initialState } from "@/reducers/cartReducer"

interface CartContextProps {
  state: {
    cartItems: CartItem[]
  }
  dispatch: React.Dispatch<any>
}

const CartContext = createContext<CartContextProps>({
  state: initialState,
  dispatch: () => null,
})

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
