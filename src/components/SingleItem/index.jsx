import React from "react";
import style from "./style.module.css";

export default function SingleItem({ fruit, handleChecked }) {
  return (
    <div className={style.flex}>
      <input type="checkbox" onChange={() => handleChecked(fruit)} />
      <span>{fruit}</span>
    </div>
  );
}
