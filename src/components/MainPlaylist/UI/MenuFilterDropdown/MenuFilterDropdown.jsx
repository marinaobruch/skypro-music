import React, { useState } from "react";
import * as S from "./MenuFilterDropdown.styles.js";
import Select from "../Select/Select.jsx";

export const MenuFilterDropdown = ({
  data,
  isLoading,
  selectedSort,
  setSelectedSort,
}) => {
  const [filter, setFilter] = useState(false);

  const [open, setOpen] = useState("");

  // const authorTrack = data.map((item) => item.author);
  // const author = Array.from(new Set(authorTrack));

  // const genreTrack = data.map((item) => item.genre);
  // const genre = Array.from(new Set(genreTrack));

  const years = ["По умолчанию", "Сначала новые", "Сначала старые"];

  const handleFilter = (i) => {
    setFilter(!filter);
    setOpen(i);
  };

  const sortTracks = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <S.MainCenterBlockFilter>
          <S.CenterBlockFilter>
            <S.FilterTitle>Искать по:</S.FilterTitle>

            <S.FilterButton
              clicked={filter && "0" === open}
              onClick={() => handleFilter("0")}
            >
              <S.CategoryButton>исполнителю</S.CategoryButton>
              {filter && "0" === open ? (
                <S.FilterPupUp>
                  <S.FilterPupUpList>
                    {author.map((option) => (
                      <S.FilterItem key={option}>{option}</S.FilterItem>
                    ))}
                  </S.FilterPupUpList>
                </S.FilterPupUp>
              ) : null}
            </S.FilterButton>

            <S.FilterButton
              clicked={filter && "1" === open}
              onClick={() => handleFilter("1")}
            >
              <S.CategoryButton>жанры</S.CategoryButton>
              {filter && "1" === open ? (
                <S.FilterPupUp>
                  <S.FilterPupUpList>
                    {genre.map((option) => (
                      <S.FilterItem key={option}>{option}</S.FilterItem>
                    ))}
                  </S.FilterPupUpList>
                </S.FilterPupUp>
              ) : null}
            </S.FilterButton>
          </S.CenterBlockFilter>

          <S.CenterBlockFilter>
            <S.FilterTitle>Сортировка по:</S.FilterTitle>
            <Select
              value={selectedSort}
              onChange={sortTracks}
              defaultValue="По умолчанию"
              options={[
                { value: "new", name: "Сначала новые" },
                { value: "old", name: "Сначала старые" },
              ]}
            />

            <S.FilterButton
              clicked={filter && "2" === open}
              onClick={() => handleFilter("2")}
            >
              <S.CategoryButton>По умолчанию</S.CategoryButton>

              {filter && "2" === open ? (
                <S.FilterPupUp>
                  <S.FilterPupUpList>
                    {years.map((option) => (
                      <S.FilterItem
                        value={option}
                        key={option}
                      >
                        {option}
                      </S.FilterItem>
                    ))}
                  </S.FilterPupUpList>
                </S.FilterPupUp>
              ) : null}
            </S.FilterButton>
          </S.CenterBlockFilter>
        </S.MainCenterBlockFilter>
      )}
    </>
  );
};
