import Header from "./Header";
import Footer from "./Footer";
import { CartItem } from "@/pages/cart";
const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between text-center">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
