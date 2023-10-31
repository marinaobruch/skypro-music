import { MainPlaylist } from "../../components/MainPlaylist/MainPlaylist.jsx";
import { useGetAllTracksQuery } from "../../redux/services/playlists.js";
import { useState } from "react";
import { MenuFilterDropdown } from "../../components/MainPlaylist/UI/MenuFilterDropdown/MenuFilterDropdown.jsx";
import * as S from "./MainPage.styles.js";
import { useDispatch } from "react-redux";
import { addAllTracksInit } from "../../redux/store/playerSlice.js";

export const MainPage = () => {
  const [selectedSort, setSelectedSort] = useState("default");
  const [selectedSortName, setSelectedSortName] = useState("По умолчанию");
  const [filter, setFilter] = useState({
    name: "",
    activeOptions: [],
  });

  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetAllTracksQuery();
  dispatch(addAllTracksInit(data));

  return (
    <>
      <S.MainCenterblockH2>Треки</S.MainCenterblockH2>
      <MenuFilterDropdown
        data={data}
        isLoading={isLoading}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        selectedSortName={selectedSortName}
        setSelectedSortName={setSelectedSortName}
        filter={filter}
        setFilter={setFilter}
      />

      <MainPlaylist
        getAllTracksError={error}
        tracks={data}
        error={error}
        isLoading={isLoading}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        filter={filter}
        setFilter={setFilter}
      />
    </>
  );
};
