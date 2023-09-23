import React from "react";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  handlePageSizeChange,
  setItemsPerPage,
  itemsPerPage,
}) {
  handlePageSizeChange = (event) => {
    setItemsPerPage(event.target.value);
  };

  return (
    <div className="pagination">
      {/* Créez des boutons pour chaque page */}

      <select
        value={itemsPerPage}
        onChange={handlePageSizeChange}
        className="form-control size"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>

      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={currentPage === index + 1 ? "active btn" : "btn"}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
