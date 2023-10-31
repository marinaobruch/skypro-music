import React, { useState } from "react";
import * as S from "./MenuFilterDropdown.styles.js";
import { useSelector } from "react-redux";

export const MenuFilterDropdown = ({
  data,
  isLoading,
  selectedSort,
  setSelectedSort,
  selectedSortName,
  setSelectedSortName,
  filter,
  setFilter,
}) => {
  const currentSearch = useSelector(
    (state) => state.audioplayer.searchTrackList
  );

  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [open, setOpen] = useState("");

  const authorTrack = data?.map((item) => item.author);
  const author = Array.from(new Set(authorTrack));
  const searchTracksAuthor = () => {
    if (!currentSearch) {
      return author;
    }
    return author?.filter((item) =>
      item?.toLowerCase().includes(currentSearch?.toLowerCase())
    );
  };
  const sortedTracksAuthor = searchTracksAuthor();

  const genreTrack = data?.map((item) => item.genre);
  const genre = Array.from(new Set(genreTrack));

  const years = [
    { value: "default", name: "По умолчанию" },
    { value: "new", name: "Сначала новые" },
    { value: "old", name: "Сначала старые" },
  ];

  const handleFilter = (i) => {
    setIsActiveMenu(!isActiveMenu);
    setOpen(i);
  };

  const sortTracks = (sort) => {
    setSelectedSort(sort.value);
    setSelectedSortName(sort.name);
  };

  const handlerClickOption = (option) => {
    if (filter.activeOptions.includes(option)) {
      setFilter({
        ...filter,
        activeOptions: filter.activeOptions.filter((item) => item !== option),
      });
      return;
    }
    setFilter({
      ...filter,
      activeOptions: [...filter.activeOptions, option],
    });
  };

  // for icon-counter
  const matchedAuthor = filter.activeOptions.filter(
    (el) => author.indexOf(el) > -1
  );

  const matchedGenre = filter.activeOptions.filter(
    (el) => genre.indexOf(el) > -1
  );

  return (
    <>
      {isLoading ? null : (
        <S.MainCenterBlockFilter>
          <S.CenterBlockFilter>
            <S.FilterTitle>Искать по:</S.FilterTitle>
            <div>
              <S.FilterButton
                clicked={isActiveMenu && "0" === open}
                onClick={() => handleFilter("0")}
              >
                исполнителю
                {matchedAuthor.length === 0 ? null : (
                  <S.FilterCounter> {matchedAuthor.length} </S.FilterCounter>
                )}
              </S.FilterButton>

              {isActiveMenu && "0" === open ? (
                <S.FilterPupUp>
                  {sortedTracksAuthor.length === 0 ? (
                    "Треков с таким исполнителем не найдено"
                  ) : (
                    <S.FilterPupUpList>
                      {sortedTracksAuthor?.map((option) => (
                        <S.FilterItem
                          key={option}
                          onClick={() => handlerClickOption(option)}
                          clicked={filter.activeOptions.includes(option)}
                        >
                          {option}
                        </S.FilterItem>
                      ))}
                    </S.FilterPupUpList>
                  )}
                </S.FilterPupUp>
              ) : null}
            </div>

            <div>
              <S.FilterButton
                clicked={isActiveMenu && "1" === open}
                onClick={() => handleFilter("1")}
              >
                жанры
                {matchedGenre.length === 0 ? null : (
                  <S.FilterCounter> {matchedGenre.length} </S.FilterCounter>
                )}
              </S.FilterButton>
              {isActiveMenu && "1" === open ? (
                <S.FilterPupUp>
                  <S.FilterPupUpList>
                    {genre.map((option) => (
                      <S.FilterItem
                        key={option}
                        onClick={() => handlerClickOption(option)}
                        clicked={filter.activeOptions.includes(option)}
                      >
                        {option}
                      </S.FilterItem>
                    ))}
                  </S.FilterPupUpList>
                </S.FilterPupUp>
              ) : null}
            </div>
          </S.CenterBlockFilter>

          <S.CenterBlockFilter>
            <S.FilterTitle>Сортировка по:</S.FilterTitle>

            <div>
              <S.FilterButton
                clicked={isActiveMenu && "2" === open}
                onClick={() => handleFilter("2")}
              >
                {selectedSortName}
                {selectedSort !== "default" ? (
                  <S.FilterCounter> 1 </S.FilterCounter>
                ) : null}
              </S.FilterButton>
              {isActiveMenu && "2" === open ? (
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
