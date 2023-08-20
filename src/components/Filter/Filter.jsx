import React, { useState } from "react";
import "./Filter.css";
import FilterItem from "../FilterItem/FilterItem";

export default function Filter() {
  const [filter, setFilter] = useState(false);
  const [open, setOpen] = useState("");

  let arrayOfArtist = [
    { id: 0, name: "Nero" },
    { id: 1, name: "Dynoro, Outwork, Mr. Gee" },
    { id: 2, name: "Ali Bakgor" },
    { id: 3, name: "Стоункат, Psychopath" },
    { id: 4, name: "Jaded, Will Clarke, AR/CO" },
    { id: 5, name: "Blue Foundation, Zeds Dead" },
    { id: 6, name: "HYBIT, Mr. Black, Offer Nissim, Hi Profile" },
    { id: 7, name: "minthaze" },
  ];

  let arrayOfYears = [
    { id: 0, name: "По умолчанию" },
    { id: 1, name: "Сначала новые" },
    { id: 2, name: "Сначала старые" },
  ];

  let arrayOfGanre = [
    { id: 0, name: "Рок" },
    { id: 1, name: "Хип-хоп" },
    { id: 2, name: "Поп-музыка" },
    { id: 4, name: "Техно" },
    { id: 5, name: "Мнди" },
    { id: 6, name: "Ремикс" },
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
        value="жанры"
        onFilterClick={() => handleFilter("2")}
        filter={filter}
        arrays={arrayOfGanre}
        open={open}
        id="2"
      />
    </div>
  );
}
