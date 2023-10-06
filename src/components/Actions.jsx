import React from "react";

export default function Actions({ moveLeft, moveRight }) {
  return (
    <div>
      <button onClick={moveLeft}>envoyer gauche</button>

      <button onClick={moveRight}>envoyer droite</button>
    </div>
  );
}
