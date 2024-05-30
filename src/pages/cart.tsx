import { useCartContext } from "@/components/CartProvider"
import { Product } from "@/data/products"

export interface CartItem extends Product {
  quantity: number
}

const CartPage = () => {
  const {
    state: { cartItems },
    dispatch,
  } = useCartContext()
  const handleCheckout = () => {
    // Here you would handle the checkout process
    alert("Checkout not implemented in this example")
  }

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const handleRemove = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id })
  }

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
              <div className="font-bold">
                <span>${item.price}</span>
                <button className="ml-2" onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
              </div>
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
  )
}

export default CartPage
