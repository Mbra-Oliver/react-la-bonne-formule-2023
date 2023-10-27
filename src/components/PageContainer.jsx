import React from "react";
import Header from "./Header";
import Search from "./Search";
import CategorieList from "./CategorieList";
import AnimalItem from "./AnimalItem";
import Pagination from "./Pagination";

export default function PageContainer() {
  return (
    <div>
      <Header />
      <div className="appContent">
        <Search />
        <CategorieList />
        <AnimalItem />
        <Pagination />
      </div>
    </div>
  );
}
