import React, { useState } from "react";
import HouseRoom from "./HouseRoom";

export default function HouseComponent() {
  const [allAmpouleOn, setAllAmpouleOn] = useState(false);

  const [houseAmpouleState, setHouseAmpouleState] = useState([
    false,
    false,
    false,
  ]);

  //Fonction pour allumer / éteindre toute les ampoules

  const toggleAllAmpouleState = () => {
    setAllAmpouleOn(!allAmpouleOn);
    const newHouseAmpouleState = houseAmpouleState.map(() => !allAmpouleOn);
    setHouseAmpouleState(newHouseAmpouleState);
  };

  //Fonction pour allumer ou éteindre une ampoule particulière

  const toggleAmpoule = (index) => {
    const newHouseAmpouleState = [...houseAmpouleState];
    newHouseAmpouleState[index] = !newHouseAmpouleState[index];
    setHouseAmpouleState(newHouseAmpouleState);
  };

  return (
    <>
      <div className="ampoule_container">
        <HouseRoom
          mode={houseAmpouleState[0]}
          toggleAmpoule={() => toggleAmpoule(0)}
        />
        <HouseRoom
          mode={houseAmpouleState[1]}
          toggleAmpoule={() => toggleAmpoule(1)}
        />
        <HouseRoom
          mode={houseAmpouleState[2]}
          toggleAmpoule={() => toggleAmpoule(2)}
        />
      </div>

      <button
        className="main_button"
        onClick={toggleAllAmpouleState}
        style={{
          backgroundColor: allAmpouleOn ? "green" : "red",
        }}
      >
        {allAmpouleOn ? "Allumer" : "Eteindre"} toute les ampoules
      </button>
    </>
  );
}
