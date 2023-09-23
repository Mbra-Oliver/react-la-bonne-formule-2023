import React, { useState } from "react";
import { animalsCats } from "../mock/data-categorie";

export default function CategorieList(props) {
  const { handleCategorieChange, selected } = props;
  const [categories, setCategories] = useState(animalsCats);

  return (

    <div className="categories_list">
      {categories.map((item) => {
        return (
          <div
            key={item.id}
            className={`categorie-item ${item.nom === selected && "selected"}`}
            onClick={() => handleCategorieChange(item.nom)}
          >
            {item.nom}
          </div>
        );
      })}
    </div>
  );
}
