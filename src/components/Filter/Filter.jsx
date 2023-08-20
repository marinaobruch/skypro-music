import React from "react";
import "./Filter.css";
import FilterItem from "../FilterItem/FilterItem";

export default function Filter() {
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <FilterItem value="исполнителю" />
      <FilterItem value="году выпуска" />
      <FilterItem value="жанру" />
    </div>
  );
}
