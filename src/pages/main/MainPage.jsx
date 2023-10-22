import { MainPlaylist } from "../../components/MainPlaylist/MainPlaylist.jsx";
import { useGetAllTracksQuery } from "../../redux/services/playlists.js";
import { useState } from "react";
import { MenuFilterDropdown } from "../../components/MainPlaylist/UI/MenuFilterDropdown/MenuFilterDropdown.jsx";
import * as S from "./MainPage.styles.js";

export const MainPage = ({ getAllTracksError }) => {
  const [selectedSort, setSelectedSort] = useState("default");

  const { data, error, isLoading } = useGetAllTracksQuery();

  return (
    <>
      <S.MainCenterblockH2>Треки</S.MainCenterblockH2>
      <MenuFilterDropdown
        data={data}
        isLoading={isLoading}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
      />

      <MainPlaylist
        getAllTracksError={getAllTracksError}
        tracks={data}
        error={error}
        isLoading={isLoading}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
      />
    </>
  );
};
