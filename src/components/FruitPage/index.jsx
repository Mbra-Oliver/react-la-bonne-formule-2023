import React from "react";
import styles from "./style.module.css";
import CategorieItems from "../CatégorieItems";
import { useState } from "react";
import { FRUITS_DATAS } from "../../../data";

export default function FruitPage() {
  const [pepinsFruitsItems, setPepinsFruitsItems] = useState(FRUITS_DATAS);
  const [noyauFruitsItems, setNoyauFruitsItems] = useState([]);

  return (
    <div className={styles.fruit_page_container}>
      <div className={styles.header}>Exercice Fruit</div>
      <p className={styles.description}>
        Ranger les fruits dans la catégorie qui leurs correspond.
      </p>
      <div className={styles.fruit_categorie_container}>
        <CategorieItems items={pepinsFruitsItems} title="Fruits à pépins" />
        <div className="buttons_container"></div>
        <CategorieItems items={noyauFruitsItems} title=" Fruits à noyau" />
      </div>
    </div>
  );
}
