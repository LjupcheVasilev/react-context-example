import Header from "./Header";
import Footer from "./Footer";
import { CartContext, CartProvider } from "./CartProvider";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col justify-between text-center">
        <Header />
        {children}
        <Footer />
      </div>
    </CartProvider>
  );
};
export default Layout;
