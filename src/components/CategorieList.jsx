import React, { useState } from "react";
import CategorieItem from "./CategorieItem";
import { animalsCats } from "../../mocks/data-categorie";

export default function CategorieList() {
  const [categories, setCategories] = useState(animalsCats);

  return (
    <div className="categories_list">
      {categories.map((item) => {
        return (
          <div className="categorie-item" key={item.id}>
            {item.nom}
          </div>
        );
      })}
    </div>
  );
}
