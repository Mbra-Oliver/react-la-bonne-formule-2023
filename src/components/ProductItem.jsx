import React from "react";

export default function ProductItem({ product }) {
  const backgroundImageStyle = {
    backgroundImage: `url(${product.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "200px",
  };

  return (
    <div className="product-item">
      <div style={backgroundImageStyle}></div>
      <div className="product-name">A Good Product</div>
      <p className="product-desc">{product.description.slice(0, 100)}</p>

      <button>Ajouter au panier</button>
    </div>
  );
}
