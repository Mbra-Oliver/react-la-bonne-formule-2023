import React from "react";

export default function AnimalListItem({ animal }) {
  // Définir le style pour l'élément card avec l'image de fond
  const cardStyle = {
    backgroundImage: `url(assets/images/${animal.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "300px",
  };

  return (
    <>
      <div className="card">
        <div style={cardStyle}></div>
        <div className="card-body">
          <h5 className="card-title">{animal.nom}</h5>
          <div className="badge-success">{animal.categorie}</div>
        </div>
      </div>
    </>
  );
}
