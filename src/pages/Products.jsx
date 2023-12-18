import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: "p1",
    title: "Ebook",
  },
  {
    id: "p2",
    title: "Software",
  },
];

export default function Products() {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
