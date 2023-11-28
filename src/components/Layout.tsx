import Header from "./Header";
import Footer from "./Footer";
import { CartItem } from "@/pages/cart";
const Layout = ({
  children,
  cartItems,
}: {
  children: JSX.Element;
  cartItems: CartItem[];
}) => {
  return (
    <div className="min-h-screen flex flex-col justify-between text-center">
      <Header cartItems={cartItems} />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
