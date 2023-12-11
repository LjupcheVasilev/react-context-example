import { CartItem } from "@/pages/cart";
import { createContext, useContext, useState } from "react";

const CartContext = createContext<{
  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void;
}>({ cartItems: [], setCartItems: () => {} });

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }: { children: JSX.Element }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleSetCartItems = (items: CartItem[]) => {
    // logic
    setCartItems(items);
  };
  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems: handleSetCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
