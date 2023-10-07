import React from "react";
import "./room.css";

export default function HouseRoom({ mode, toggleAmpoule }) {
  return (
    <div className="single_ampoule_container">
      <div className={`ampoule_item ${mode ? "light" : "dark"}`}></div>

      <div>Etat: {mode ? "Allumé" : "Eteinte"}</div>

      <button
        onClick={toggleAmpoule}
        style={{
          backgroundColor: mode ? "red" : "green",
        }}
      >
        {mode ? "Eteindre" : "Allumer"} l'ampoule
      </button>
    </div>
  );
}
