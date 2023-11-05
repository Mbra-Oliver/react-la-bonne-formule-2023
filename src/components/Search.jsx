import React from "react";

export default function Search({ search, handleSearch }) {
  const handleChange = (e) => {
    const typingText = e.target.value;
    handleSearch(typingText);
  };
  return (
    <div className="input-container">
      <input
        value={search}
        onChange={handleChange}
        placeholder="rechercher un animal"
      />
    </div>
  );
}
