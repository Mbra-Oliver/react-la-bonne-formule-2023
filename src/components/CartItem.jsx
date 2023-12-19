import React from "react";
import { shoppingCartActions } from "./../store/shopping-cart-slice";
import { useDispatch } from "react-redux";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const divStyle = {
    backgroundImage: `url(${item.cover})`,
    backgroundSize: "cover", // Vous pouvez ajuster ceci en fonction de vos besoins
    backgroundPosition: "center", // Vous pouvez ajuster ceci en fonction de vos besoins
    backgroundRepeat: "no-repeat",
    width: "180px",
    height: "180px",
  };

  const handleRemoveItem = () => {
    dispatch(shoppingCartActions.removeItem(item.id));
  };

  const handleIncrementQuantity = () => {
    dispatch(shoppingCartActions.incrementQuantity(item.id));
  };
  const handleDecrementQuantity = () => {
    dispatch(shoppingCartActions.decrementQuantity(item.id));
  };

  return (
    <div className="cart-item">
      <div className="left-part">
        <div className="image" style={divStyle}></div>
        <div className="item-details">
          <div className="title">{item.title}</div>
          <p>
            {item.quantity}x {item.price}
          </p>

          <button onClick={handleRemoveItem}>Retirer du panier</button>
        </div>
      </div>

      <div className="right-part">
        <div className="selector">
          <span onClick={handleDecrementQuantity}>-</span>
          <span>{item.quantity}</span>
          <span onClick={handleIncrementQuantity}>+</span>
        </div>

        <div className="price">{item.price * item.quantity} CFA</div>
      </div>
    </div>
  );
}
