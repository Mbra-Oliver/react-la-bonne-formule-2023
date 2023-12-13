import React, { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import CartContext from "../store/CartContext";

export default function CartItem({ item }) {
  const { addItem, removeItem } = useContext(CartContext);

  function handleIncrease() {
    addItem(item);
  }

  function handleDecrease() {
    removeItem(item.id);
  }

  return (
    <li className="cart-item">
      <p>
        {item.name} - {item.quantity} x {currencyFormatter.format(item.price)}
      </p>

      <p className="cart-item-actions">
        <button onClick={handleDecrease}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </p>
    </li>
  );
}
