import React from "react";

export default function Form() {
  const handleSubmitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log(formData.get("search"));
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <h4>Champ non controllé</h4>
      <input type="text" name="search" placeholder="Recherche" />
      <button type="submit" disabled>
        Envoyer
      </button>
    </form>
  );
}
