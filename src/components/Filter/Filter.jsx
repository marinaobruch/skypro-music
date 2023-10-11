import React, { useState } from "react";
import * as S from "./Filter.styles.js";
import { FilterItem } from "./FilterItem/FilterItem.jsx";
import { tracksArray } from "../Imports/TracksImport";

export function Filter() {
  const [filter, setFilter] = useState(false);
  const [open, setOpen] = useState("");

  const arrayOfArtistNoFilter = tracksArray.map((item) => item.user.artist);
  let arrayOfArtist = [...new Set(arrayOfArtistNoFilter)];

  const arrayOfYearNoFilter = tracksArray.map((item) => item.user.releaseDate);
  let arrayOfYear = [...new Set(arrayOfYearNoFilter)];

  const arrayOfGenreNoFilter = tracksArray.map((item) => item.user.genre);
  let arrayOfGenre = [...new Set(arrayOfGenreNoFilter)];

  const handleFilter = (i) => {
    setFilter(!filter);
    setOpen(i);
  };

  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
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
        arrays={arrayOfYear}
        open={open}
        id="1"
      />

      <FilterItem
        value="жанры"
        onFilterClick={() => handleFilter("2")}
        filter={filter}
        arrays={arrayOfGenre}
        open={open}
        id="2"
      />
    </S.CenterblockFilter>
  );
}
