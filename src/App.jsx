import React, { useState } from "react";
import "./App.css";
import Enfant from "./components/Enfant";

function App() {
  let appName = "Application";

  const [msg, setMsg] = useState("");

  //On dit au parent qu'il va recevoir cette propriété de l'enfant
  const messageContent = (messageFromChild) => {
    setMsg(messageFromChild);
  };

  return (
    <>
      <p>
        Message en provenance de l'enfant:{msg} 
      </p>
      <Enfant application={appName} messageToSend={messageContent} />
    </>
  );
}

export default App;
