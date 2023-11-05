import React from "react";
import AnimalItem from "./AnimalItem";

export default function AnimalList({ animals }) {
  return (
    <div className="grid-4">
      {animals.map((item) => {
        return <AnimalItem animal={item} key={item.id} />;
      })}
    </div>
  );
}
