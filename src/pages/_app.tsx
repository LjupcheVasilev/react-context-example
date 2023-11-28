import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { CartItem } from "./cart";

export default function App({ Component, pageProps }: AppProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  return (
    <>
      <Layout cartItems={cartItems}>
        <Component
          {...pageProps}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </Layout>
    </>
  );
}
