import React from "react";
import style from "./style.module.css";
export default function ActionBtns({ moveLeft, moveRight }) {
  return (
    <div className={style.button_container}>
      <button onClick={moveRight} className={style.button_move}>
        <i className="fa fa-arrow-right"></i>
      </button>
      <button onClick={moveLeft} className={style.button_move}>
        <i className="fa fa-arrow-left"></i>
      </button>
    </div>
  );
}
