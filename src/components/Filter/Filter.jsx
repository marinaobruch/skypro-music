import React, { useState } from "react";
import "./Filter.css";
import FilterItem from "../FilterItem/FilterItem";

export default function Filter() {
  const [filter, setFilter] = useState(false);
  const [open, setOpen] = useState("");

  let arrayOfArtist = [
    { id: 0, name: "Nero" },
    { id: 1, name: "Dynoro" },
    { id: 2, name: "Ali Bakgor" },
  ];

  let arrayOfYears = [
    { id: 0, name: "2000" },
    { id: 1, name: "2002" },
    { id: 2, name: "2012" },
  ];

  let arrayOfGanre = [
    { id: 0, name: "Pop" },
    { id: 1, name: "Funk" },
    { id: 2, name: "Dance" },
  ];

  const handleFilter = (i) => {
    setFilter(!filter);
    setOpen(i);
  };

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <FilterItem
        value="исполнителю"
        onFilterClick={() => handleFilter("0")}
        filter={filter}
        arrays={arrayOfArtist}
        open={open}
        id="0"
      />

      <FilterItem
        value="году выпуска"
        onFilterClick={() => handleFilter("1")}
        filter={filter}
        arrays={arrayOfYears}
        open={open}
        id="1"
      />

      <FilterItem
        value="жанру"
        onFilterClick={() => handleFilter("2")}
        filter={filter}
        arrays={arrayOfGanre}
        open={open}
        id="2"
      />
    </div>
  );
}
