import React from "react";
import ProductItem from "../ProductItem";
import { DUMMY_DATAS } from "../../data.js";
export default function Products() {
  return (
    <div className="products-list">
      {DUMMY_DATAS.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
