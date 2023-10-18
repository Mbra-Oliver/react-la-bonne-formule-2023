import React from "react";
import CategorieItemstyles from "./style.module.css";
import SingleItem from "../SingleItem";
export default function CategorieItems({ title, items, handleChecked }) {
  return (
    <div className={CategorieItemstyles.content}>
      <div className={CategorieItemstyles.header}>{title}</div>
      <div className={CategorieItemstyles.contentBottom}>
        {items.map((item, index) => {
          return (
            <SingleItem
              key={index}
              fruit={item}
              handleChecked={handleChecked}
            />
          );
        })}
      </div>
    </div>
  );
}
