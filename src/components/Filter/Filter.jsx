import React, { useState } from "react";
import "./Filter.css";
import FilterItem from "../FilterItem/FilterItem";

export default function Filter() {
  const [filter, setFilter] = useState(false);

  const handleFilter = () => {
    setFilter(!filter);
  };

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <FilterItem
        value="исполнителю"
        onFilterClick={() => handleFilter()}
        filter={filter}
      />
      <FilterItem
        value="году выпуска"
        onFilterClick={() => handleFilter()}
        filter={filter}
      />
      <FilterItem
        value="жанру"
        onFilterClick={() => handleFilter()}
        filter={filter}
      />
    </div>
  );
}
