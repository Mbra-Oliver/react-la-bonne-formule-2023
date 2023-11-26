import React from "react";

export default function ProductItem({ product }) {
  console.log(product);

  const backgroundImage = {
    backgroundImage: url(`${product.image}`),
  };

  return (
    <div className="product-item">
      <div className="product-image"></div>
      <div className="product-name">A Good Product</div>
      <p className="product-desc">{product.description.slice(0, 100)}</p>

      <button>Ajouter au panier</button>
    </div>
  );
}
