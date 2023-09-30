import React from "react";
import "./Ampoule.css";
export default function Ampoule({ mode, toggleAmpoule }) {
  return (
    <div className="single_ampoule_container">
      <div className={`ampoule_item ${mode ? "light" : "dark"}`}></div>
      <div>{mode ? "Allumé" : "Eteint"}</div>

      <button onClick={toggleAmpoule}>
        {mode ? "Éteindre" : "Allumer"} cette ampoule
      </button>
    </div>
  );
}
