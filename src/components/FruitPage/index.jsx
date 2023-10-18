import React from "react";
import styles from "./style.module.css";
import CategorieItems from "../CatégorieItems";
import { useState } from "react";
import {
  Correct_NOYAU_FRUIT,
  Correct_PEPINS_FRUIT,
  FRUITS_DATAS,
} from "../../../data";
import ActionBtns from "../ActionsButton";
import {
  areArraysEqual,
  elementAbsent,
  intersection,
} from "../../../utils/utils";

export default function FruitPage() {
  const [pepinsFruitsItems, setPepinsFruitsItems] = useState(FRUITS_DATAS);
  const [noyauFruitsItems, setNoyauFruitsItems] = useState([]);
  const [elementsCocher, setElementsCocher] = useState([]);
  const [message, setMessage] = useState("");

  //Recuperer les elements cocher dans chaque section

  const noyauFruitSelectionner = intersection(noyauFruitsItems, elementsCocher);

  const pepinsFruitSelectionner = intersection(
    pepinsFruitsItems,
    elementsCocher
  );

  const gestionElementsCocher = (item) => {
    const currentIndex = elementsCocher.indexOf(item);
    const newCheckedItem = [...elementsCocher];

    //Gerer l'état coché

    if (currentIndex === -1) {
      newCheckedItem.push(item);
    } else {
      newCheckedItem.splice(currentIndex, 1);
    }

    setElementsCocher(newCheckedItem);
  };

  const deplacerVersNoyauFruit = () => {
    setNoyauFruitsItems(noyauFruitsItems.concat(pepinsFruitSelectionner));

    setPepinsFruitsItems(
      elementAbsent(pepinsFruitsItems, pepinsFruitSelectionner)
    );

    setElementsCocher(elementAbsent(elementsCocher, pepinsFruitSelectionner));
  };

  const deplacerVersPepinFruit = () => {
    setPepinsFruitsItems(pepinsFruitsItems.concat(noyauFruitSelectionner));
    setNoyauFruitsItems(
      elementAbsent(noyauFruitsItems, noyauFruitSelectionner)
    );

    setElementsCocher(elementAbsent(elementsCocher, noyauFruitSelectionner));
  };

  const sendExercice = () => {
    const checkPepinsFruits = areArraysEqual(
      pepinsFruitsItems,
      Correct_PEPINS_FRUIT
    );

    const checkNoyauFruits = areArraysEqual(
      noyauFruitsItems,
      Correct_NOYAU_FRUIT
    );

    if (checkNoyauFruits && checkPepinsFruits) {
      setMessage("Exercice réussi");
    } else {
      setMessage("");
      alert("Les fruits ne sont pas rangé correctement");
    }
  };

  return (
    <div className={styles.fruit_page_container}>
      <div className={styles.header}>Exercice Fruit</div>

      <h5
        style={{
          color: "green",
        }}
      >
        {message}
      </h5>
      <p className={styles.description}>
        Ranger les fruits dans la catégorie qui leurs correspond.
      </p>
      <div className={styles.fruit_categorie_container}>
        <CategorieItems
          items={pepinsFruitsItems}
          title="Fruits à pépins"
          handleChecked={gestionElementsCocher}
        />

        <ActionBtns
          moveLeft={deplacerVersPepinFruit}
          moveRight={deplacerVersNoyauFruit}
        />

        <CategorieItems
          items={noyauFruitsItems}
          title=" Fruits à noyau"
          handleChecked={gestionElementsCocher}
        />
      </div>

      <button className={styles.main_btn} onClick={sendExercice}>
        Soumettre
      </button>
    </div>
  );
}
