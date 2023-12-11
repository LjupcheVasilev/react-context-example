import { CartItem } from "@/pages/cart";
import Link from "next/link";
import { useContext } from "react";
import { useCartContext } from "./CartProvider";
const Header = () => {
  const { cartItems } = useCartContext();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <nav className="w-full flex justify-between p-4 align-middle">
      <Link href="/" className="flex items-center">
        <div className="">
          PLANTS <span>☘</span>
        </div>
      </Link>
      <Link href="/cart" className="flex">
        <span className="mr-2">🛒</span>
        <p>${totalPrice.toFixed(2)}</p>
      </Link>
    </nav>
  );
};

export default Header;
