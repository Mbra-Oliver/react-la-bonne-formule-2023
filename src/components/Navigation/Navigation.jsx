import React from "react";
import classes from "./Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { shoppingCartActions } from "./../../store/shopping-cart-slice";

export default function Navigation() {
  const dispatch = useDispatch();

  let cartButtonText = "Panier";
  const shoppingCartItems = useSelector((state) => state.cartReducer.items);
  const shoppingCartView = useSelector((state) => state.viewCart);
  if (shoppingCartItems.viewCart) {
    cartButtonText = "Masquer";
  }
  const toggleCartView = () => {
    dispatch(shoppingCartActions.toggleCartView());
  };

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
      <button className={classes.button} onClick={toggleCartView}>
        {cartButtonText} ({shoppingCartItems.length} articles)
      </button>
    </header>
  );
}
