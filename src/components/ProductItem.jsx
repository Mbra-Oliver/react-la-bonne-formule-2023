import React from "react";

export default function ProductItem({ product }) {
  const divStyle = {
    backgroundImage: `url(${product.cover})`,
    backgroundSize: "cover", // Vous pouvez ajuster ceci en fonction de vos besoins
    backgroundPosition: "center", // Vous pouvez ajuster ceci en fonction de vos besoins
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "180px",
  };
  return (
    <div className="product-item">
      <div style={divStyle}></div>
      <div className="title">{product.title}</div>
      <div className="description">{product.description}</div>
      <div className="price">{product.price} CFA</div>

      <button>ajouter au panier</button>
    </div>
  );
}
