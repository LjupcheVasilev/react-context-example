import { useRouter } from "next/router";
import products, { Product } from "../../data/products";
import React from "react";
import Image from "next/image";
import { CartItem } from "../cart";

const ProductPage = ({
  cartItems,
  setCartItems,
}: {
  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void;
}) => {
  const router = useRouter();
  const { productId } = router.query;
  const product = products.find(
    (p: Product) => p.id === parseInt(productId as string)
  );

  if (!product) return <p>Product not found</p>;

  const handleAddToCart = () => {
    const cartItem = cartItems.find((item: Product) => item.id === product.id);

    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    setCartItems([...cartItems]);
    alert("Added to cart!");
  };

  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={300}
        height={300}
        className="w-full h-96 object-contain mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="mb-2">{product.description}</p>
      <p className="font-bold mb-4">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-6 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
