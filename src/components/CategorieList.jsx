import React, { useState } from "react";
import CategorieItem from "./CategorieItem";
import { animalsCats } from "../../mocks/data-categorie";

export default function CategorieList({ selected, handleCategorieChange }) {
  const [categories, setCategories] = useState(animalsCats);

  return (
    <div className="categories_list">
      {categories.map((item) => {
        return (
          <div
            className={`categorie-item ${item.nom === selected && "selected"}`}
            key={item.id}
            onClick={() => handleCategorieChange(item.nom)}
          >
            {item.nom}
          </div>
        );
      })}
    </div>
  );
}
