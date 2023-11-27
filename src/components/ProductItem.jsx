import { useContext } from "react";
import { PanierContext } from "../store/panier-context";

const ProductItem = ({ product }) => {
  const { addItemToCart } = useContext(PanierContext);

  //Style pour l'affichage de l'image

  const productImageStyle = {
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
      <div style={productImageStyle}></div>
      <div className="product-name">{product.name}</div>
      <div className="product-desc">{product.description.slice(0, 100)}</div>
      <div className="price">{product.price} Euro</div>

      <button onClick={() => addItemToCart(product.id)}>
        Ajouter au panier
      </button>
    </div>
  );
};

export default ProductItem;
