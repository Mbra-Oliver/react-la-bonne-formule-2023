import React from "react";

export default function CustomSearchInput({ search, handleSearch }) {
  const handleChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <input
      className="form-control mb-3"
      value={search}
      onChange={handleChange}
      placeholder="Rechercher un animal"
    />
  );
}
