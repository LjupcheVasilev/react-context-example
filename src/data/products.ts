export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: StaticImageData;
}

import { StaticImageData } from 'next/image';
import product1 from '../../public/images/product1.png'
import product2 from '../../public/images/product2.png'
import product3 from '../../public/images/product3.png'

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is a description for Product 1.",
    price: 10.99,
    imageUrl: product1,
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is a description for Product 2.",
    price: 19.99,
    imageUrl: product2,
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is a description for Product 3.",
    price: 29.99,
    imageUrl: product3,
  },
];

export default products;
