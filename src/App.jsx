import React, { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [isValidForm, setIsValidForm] = useState(false);

  const handleSearchInputChange = (e) => {
    const searchValue = e.target.value;
    setIsValidForm(searchValue.trim().length > 0);
    setSearch(e.target.value);
  };

  return (
    <>
      <form>
        <h4>Formulaire controllé</h4>
        <input
          type="text"
          placeholder="Recherche"
          value={search}
          onChange={handleSearchInputChange}
        />
        <button type="submit" disabled={!isValidForm}>
          Envoyer
        </button>
      </form>
    </>
  );
}

export default App;
