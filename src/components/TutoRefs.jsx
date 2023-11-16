import React, { useRef, useState } from "react";

export default function TutoRefs() {
  const userName = useRef();

  console.log("ok");
  const [enteredName, setEnteredName] = useState(false);

  const handleClick = () => {
    setEnteredName(userName.current.value);
    userName.current.value = "";
  };

  return (
    <div>
      <h2>Salut {enteredName ?? enteredName}</h2>
      <div>
        <input ref={userName} type="text" />
        <button onClick={handleClick}>Définir le nom</button>
      </div>
    </div>
  );
}
