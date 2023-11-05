import React from "react";

export default function AnimalItem({ animal }) {
  const cardImgStyle = {
    backgroundImage: `url(assets/images/${animal.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    height: "300px",
  };

  return (
    <div className="card">
      <div style={cardImgStyle}></div>
      <div className="card-body">
        <div className="card-title">{animal.nom}</div>
        <div className="badge-success">{animal.categorie}</div>
      </div>
    </div>
  );
}
