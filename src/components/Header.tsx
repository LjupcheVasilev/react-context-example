import Link from "next/link";
const Header = () => {
  return (
    <nav className="w-full flex justify-between p-4 align-middle">
      <Link href="/" className="flex items-center">
        <div className="">
          PLANTS <span>☘</span>
        </div>
      </Link>
      <Link href="/cart" className="flex">
        <span className="mr-2">🛒</span>
        <p>$0.00</p>
      </Link>
    </nav>
  );
};

export default Header;
