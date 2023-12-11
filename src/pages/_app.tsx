import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import { CartItem } from "./cart";
import CartProvider from "@/components/CartProvider";

export default function App({ Component, pageProps }: AppProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  return (
    <>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </>
  );
}
