import React, { useContext } from "react";
import { ManagementCartContext } from "../store/management-cart-context";

export default function Cart() {
  const { items } = useContext(ManagementCartContext);

  const totalPrice = 0;

  return (
    <div id="cart">
      {items.length === 0 && <p>Aucune donnée</p>}

      {items.length > 0 && (
        <ul id="cart-datas">
          {items.map((item) => {
            return (
              <li key={item.id} className="flex">
                <div className="flex">
                  <span>{item.name}</span>
                  <span>100 £</span>
                </div>

                <div className="cart-box-actions flex">
                  <button>-</button>
                  <span>{item.quantity}</span>
                  <button>+</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
