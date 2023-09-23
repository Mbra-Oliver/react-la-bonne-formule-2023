import React, { useState } from "react";
import AnimalListItem from "./AnimalListItem";
import { allData, filteredData, searchData } from "../mock/data-animals";
import Pagination from "../utils/pagination";
import CategorieList from "./CategorieList";
import CustomSearchInput from "./CustomSearchInput";
// Importez la nouvelle composante

export default function AnimalList() {
  const [animals, setAnimals] = useState(allData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [selectedCategorie, setSelectedCategorie] = useState("");
  const [search, setSearch] = useState("");

  // Calculez l'index de début et de fin pour les éléments de la page actuelle
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageSizeChange = (size) => {
    setItemsPerPage(size);
  };

  // Filtrer les animaux pour n'afficher que ceux de la page actuelle
  const animalsToDisplay = animals.slice(startIndex, endIndex);

  // Fonction pour changer de page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategorieChange = (nom) => {
    setSelectedCategorie(nom);
    setAnimals(filteredData(nom));
  };

  const handleSearch = (search) => {
    setSearch(search);
    setAnimals(searchData(search));
  };

  return (
    <div>
      <CustomSearchInput search={search} handleSearch={handleSearch} />

      <CategorieList
        selected={selectedCategorie}
        handleCategorieChange={handleCategorieChange}
      />
      <div className="grid-4">
        {animalsToDisplay.map((item) => (
          <AnimalListItem animal={item} key={item.id} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(animals.length / itemsPerPage)}
        onPageChange={handlePageChange}
        handlePageSizeChange={handlePageSizeChange}
        setItemsPerPage={setItemsPerPage}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
}
