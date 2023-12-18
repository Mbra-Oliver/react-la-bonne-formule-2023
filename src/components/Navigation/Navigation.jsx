import React from "react";
import classes from "./Navigation.module.css";
import { useSelector } from "react-redux";
export default function Navigation() {
  let cartButtonText = "Panier";
  const shoppingCartItems = useSelector((state) => state.cartReducer.items);
  const shoppingCartView = useSelector((state) => state.viewCart);
  if (shoppingCartItems.viewCart) {
    cartButtonText = "Masquer";
  }

  return (
    <header>
      <ul className="list">
        <li>
          <a className="active">Accueil</a>
        </li>
        <li>
          <a>Produits</a>
        </li>
      </ul>
      <button className={classes.button}>
        {cartButtonText} ({shoppingCartItems.length} articles)
      </button>
    </header>
  );
}
