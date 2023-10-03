import React from "react";

const Enfant = (props) => {
  const { application, messageToSend } = props;

  const handleClick = () => {
    const messageFromChild = "Message enfant";
    messageToSend(messageFromChild);
  };

  return (
    <>
      <h1>Composante enfant - {application}</h1>
      <button onClick={handleClick}>Envoyer message au parent</button>
    </>
  );
};

export default Enfant;
