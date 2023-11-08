import React, { useState, useEffect } from "react";
import Header from "./Header";
import Search from "./Search";
import CategorieList from "./CategorieList";
import Pagination from "./Pagination";
import AnimalList from "./AnimalList";
import { allData, filteredData, searchData } from "../../mocks/data-animal";

export default function PageContainer() {
  const [animals, setAnimals] = useState(allData);
  const [animalToDisplay, setAnimalsToDisplay] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [selectedCategory, setSelectedCategory] = useState("");
  //Index de recuperation de données et de fin de données

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    setAnimalsToDisplay(animals.slice(startIndex, endIndex));
  }, [currentPage, search]);

  //Une variable qui recupere les animaux a afficher

  const handleSearch = (searchText) => {
    setSearch(searchText);
    setAnimals(searchData(searchText));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePageSizeChange = (e) => {
    const perPage = e.target.value;
    setItemsPerPage(perPage);
  };

  const handleCategorieChange = (categorie) => {
    setSelectedCategory(categorie);
    setAnimals(filteredData(categorie));
  };

  return (
    <div>
      <Header />
      <div className="appContent container">
        <Search search={search} handleSearch={handleSearch} />
        <CategorieList
          selected={selectedCategory}
          handleCategorieChange={handleCategorieChange}
        />
        <AnimalList animals={animalToDisplay} />

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(animals.length / itemsPerPage)}
          handlePageSizeChange={handlePageSizeChange}
          onPageChange={handlePageChange}
          setItemsPerPage={setItemsPerPage}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  );
}
