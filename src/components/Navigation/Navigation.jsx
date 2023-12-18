import React from "react";
import classes from "./Navigation.module.css";
export default function Navigation() {
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
      <button className={classes.button}>Panier (0 articles)</button>
    </header>
  );
}
