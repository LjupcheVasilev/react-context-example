// pages/cart.tsx
import { Product } from "@/data/products";
import { useState, useEffect } from "react";

interface CartItem extends Product {
  quantity: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") as string) || [];
    setCartItems(cart);
  }, []);

  const handleCheckout = () => {
    // Here you would handle the checkout process
    alert("Checkout not implemented in this example");
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border p-4 mb-2 flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>Quantity: {item.quantity}</p>
              </div>
              <span className="font-bold">${item.price}</span>
            </div>
          ))}
          <div className="border p-4 mt-4">
            <h2 className="text-xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </h2>
            <button
              onClick={handleCheckout}
              className="bg-green-500 text-white px-6 py-2 rounded mt-2"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
