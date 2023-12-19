import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

export default function Cart() {
  const items = useSelector((state) => state.cartReducer.items);

  let content = <p>Panier vide !</p>;

  if (items.length > 0) {
    content = (
      <div className="cart-items">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    );
  }
  return (
    <div className="shopping-cart">
      <h2>Panier ({items.length} éléments)</h2>
      {content}
    </div>
  );
}
