import React from "react";
import style from "./style.module.css";

export default function SingleItem({ fruit }) {
  return (
    <div className={style.flex}>
      <input type="checkbox" name="" id="" />
      <span>{fruit}</span>
    </div>
  );
}
