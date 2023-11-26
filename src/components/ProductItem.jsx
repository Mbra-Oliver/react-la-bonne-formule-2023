import React, { useContext } from "react";
import { ManagementCartContext } from "../store/management-cart-context";

export default function ProductItem({ product }) {
  const { addItemToCart } = useContext(ManagementCartContext);

  const backgroundImageStyle = {
    backgroundImage: `url(${product.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "200px",
    width: "100%",
    borderRadius: "5px",
  };

  return (
    <div className="product-item">
      <div style={backgroundImageStyle}></div>
      <div className="product-name">{product.name}</div>
      <p className="product-desc">{product.description.slice(0, 100)}</p>
      <div className="price">{product.price} Euros</div>

      <button onClick={() => addItemToCart(product.id)}>
        Ajouter au panier
      </button>
    </div>
  );
}
