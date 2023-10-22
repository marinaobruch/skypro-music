import React, { useState } from "react";
import * as S from "./MenuFilterDropdown.styles.js";
import { tracksArray } from "../../../Imports/TracksImport.jsx";

export function MenuFilterDropdown() {
  const [filter, setFilter] = useState(false);
  const [open, setOpen] = useState("");

  //tracksArray - моковые треки
  const arrayOfArtistNoFilter = tracksArray.map((item) => item.user.artist);
  let arrayOfArtist = [...new Set(arrayOfArtistNoFilter)];

  const arrayOfGenreNoFilter = tracksArray.map((item) => item.user.genre);
  let arrayOfGenre = [...new Set(arrayOfGenreNoFilter)];

  const handleFilter = (i) => {
    setFilter(!filter);
    setOpen(i);
  };

  return (
    <S.MainCenterBlockFilter>
      <S.CenterBlockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>

        <S.FilterButton
          isClicked={filter && "0" === open}
          onClick={() => handleFilter("0")}
        >
          <S.CategoryButton>исполнителю</S.CategoryButton>
          {filter && "0" === open ? (
            <S.FilterPupUp>
              <S.FilterPupUpList>
                {arrayOfArtist.map((option) => (
                  <S.FilterItem key={option}>{option}</S.FilterItem>
                ))}
              </S.FilterPupUpList>
            </S.FilterPupUp>
          ) : null}
        </S.FilterButton>

        <S.FilterButton
          isClicked={filter && "1" === open}
          onClick={() => handleFilter("1")}
        >
          <S.CategoryButton>жанры</S.CategoryButton>
          {filter && "1" === open ? (
            <S.FilterPupUp>
              <S.FilterPupUpList>
                {arrayOfGenre.map((option) => (
                  <S.FilterItem key={option}>{option}</S.FilterItem>
                ))}
              </S.FilterPupUpList>
            </S.FilterPupUp>
          ) : null}
        </S.FilterButton>
      </S.CenterBlockFilter>

      <S.CenterBlockFilter>
        <S.FilterTitle>Сортировка по:</S.FilterTitle>

        <S.FilterButton
          isClicked={filter && "2" === open}
          onClick={() => handleFilter("2")}
        >
          <S.CategoryButton>По умолчанию</S.CategoryButton>
          {filter && "2" === open ? (
            <S.FilterPupUp>
              <S.FilterPupUpList>
                {arrayOfGenre.map((option) => (
                  <S.FilterItem key={option}>{option}</S.FilterItem>
                ))}
              </S.FilterPupUpList>
            </S.FilterPupUp>
          ) : null}
        </S.FilterButton>
      </S.CenterBlockFilter>
    </S.MainCenterBlockFilter>
  );
}
