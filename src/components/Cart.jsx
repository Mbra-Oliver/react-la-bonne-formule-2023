import { useContext } from "react";
import { PanierContext } from "../store/panier-context";

export const Cart = () => {
  const { items, updateItemQuantity } = useContext(PanierContext);

  const totalAmount = items.reduce(
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
          Votre panier est vide.
        </p>
      )}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((product) => {
            return (
              <li key={product.id} className="flex">
                <div className="flex flex-col">
                  <span className="name">{product.name}</span>
                  <span className="price">{product.amount} Euro</span>
                </div>

                <div className="cart-box-actions flex">
                  <button onClick={() => updateItemQuantity(product.id, -1)}>
                    -
                  </button>
                  <span className="price-quantity">{product.quantity}</span>
                  <button onClick={() => updateItemQuantity(product.id, 1)}>
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
          Montant total :{" "}
          <strong>
            {totalAmount.toFixed(2)} Euro{totalAmount > 1 ? "s" : ""}
          </strong>
        </p>
      )}
    </div>
  );
};
