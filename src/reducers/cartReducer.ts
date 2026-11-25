import { CartItem } from "@/pages/cart"

interface CartState {
  cartItems: CartItem[]
}

const initialState: CartState = {
  cartItems: [],
}

type Action =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | { type: "CLEAR_CART" }

const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      )

      const cartWithUpdatedItem = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }
        return item
      })

      if (existingItem) {
        return {
          ...state,
          cartItems: cartWithUpdatedItem,
        }
      } else {
        const newItem = { ...action.payload, quantity: 1 }
        const cartNewItem = [...state.cartItems, newItem]
        return {
          ...state,
          cartItems: cartNewItem,
        }
      }
    case "REMOVE_FROM_CART":
      const cartWithoutItem = state.cartItems.filter(
        (item) => item.id !== action.payload
      )
      return {
        ...state,
        cartItems: cartWithoutItem,
      }
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      }
    default:
      return state
  }
}

export { initialState, cartReducer }
