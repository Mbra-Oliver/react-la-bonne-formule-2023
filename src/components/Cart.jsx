import React, { useContext } from "react";
import { ManagementCartContext } from "../store/management-cart-context";

export default function Cart() {
  const { items, updateItemQuantity } = useContext(ManagementCartContext);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.amount * item.quantity,
    0
  );

  return (
    <div id="cart">
      {items.length === 0 && (
        <p
          style={{
            color: "#000",
          }}
        >
          Aucune donnée.
        </p>
      )}

      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            return (
              <li key={item.id} className="flex">
                <div className="flex flex-col">
                  <span>{item.name}</span>
                  <span className="price">{item.amount} Euro</span>
                </div>

                <div className="cart-box-actions flex">
                  <button onClick={() => updateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span className="price-quantity">{item.quantity}</span>
                  <button onClick={() => updateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {items.length > 0 && (
        <p id="cart-total-price">
          Cart Total: <strong>{totalPrice.toFixed(2)} Euros</strong>
        </p>
      )}
    </div>
  );
}
