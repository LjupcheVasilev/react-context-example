// pages/index.tsx
import Link from "next/link";
import products, { Product } from "../data/products";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Web Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <Link
            href={`/products/${product.id}`}
            className="hover:decoration:none text-white decoration-none text-left"
            key={product.id}
          >
            <div className="border p-4 dark:border-gray-700">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-64 object-contain mb-2"
              />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p>{product.description}</p>
              <p className="font-bold">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
