import React, { useState } from "react";
import * as S from "./MenuFilterDropdown.styles.js";

export const MenuFilterDropdown = ({
  data,
  isLoading,
  selectedSort,
  setSelectedSort,
  selectedSortName,
  setSelectedSortName,
}) => {
  const [filter, setFilter] = useState(false);
  const [open, setOpen] = useState("");

  const authorTrack = data?.map((item) => item.author);
  const author = Array.from(new Set(authorTrack));

  const genreTrack = data?.map((item) => item.genre);
  const genre = Array.from(new Set(genreTrack));

  const years = [
    { value: "default", name: "По умолчанию" },
    { value: "new", name: "Сначала новые" },
    { value: "old", name: "Сначала старые" },
  ];

  const handleFilter = (i) => {
    setFilter(!filter);
    setOpen(i);
  };

  const sortTracks = (sort) => {
    setSelectedSort(sort.value);
    setSelectedSortName(sort.name);
  };

  return (
    <>
      {isLoading ? null : (
        <S.MainCenterBlockFilter>
          <S.CenterBlockFilter>
            <S.FilterTitle>Искать по:</S.FilterTitle>

            <S.FilterButton
              clicked={filter && "0" === open}
              onClick={() => handleFilter("0")}
            >
              исполнителю
              {filter && "0" === open ? (
                <S.FilterPupUp>
                  <S.FilterPupUpList>
                    {author.map((option) => (
                      <S.FilterItem
                        key={option}
                        onClick={() => "author"}
                      >
                        {option}
                      </S.FilterItem>
                    ))}
                  </S.FilterPupUpList>
                </S.FilterPupUp>
              ) : null}
            </S.FilterButton>

            <S.FilterButton
              clicked={filter && "1" === open}
              onClick={() => handleFilter("1")}
            >
              жанры
              {filter && "1" === open ? (
                <S.FilterPupUp>
                  <S.FilterPupUpList>
                    {genre.map((option) => (
                      <S.FilterItem
                        key={option}
                        onClick={() => "genre"}
                      >
                        {option}
                      </S.FilterItem>
                    ))}
                  </S.FilterPupUpList>
                </S.FilterPupUp>
              ) : null}
            </S.FilterButton>
          </S.CenterBlockFilter>

          <S.CenterBlockFilter>
            <S.FilterTitle>Сортировка по:</S.FilterTitle>

            <div>
              <S.FilterButton
                clicked={filter && "2" === open}
                onClick={() => handleFilter("2")}
              >
                {selectedSortName}
                {selectedSort !== "default" ? (
                  <S.FilterCounter>1 </S.FilterCounter>
                ) : null}
              </S.FilterButton>
              {filter && "2" === open ? (
                <S.FilterPupUp>
                  <S.FilterPupUpList>
                    {years.map((option) => (
                      <S.FilterItem
                        clicked={selectedSortName === option.name}
                        onClick={() => sortTracks(option)}
                        value={option.value}
                        key={option.name}
                      >
                        {option.name}
                      </S.FilterItem>
                    ))}
                  </S.FilterPupUpList>
                </S.FilterPupUp>
              ) : null}
            </div>
          </S.CenterBlockFilter>
        </S.MainCenterBlockFilter>
      )}
    </>
  );
};
