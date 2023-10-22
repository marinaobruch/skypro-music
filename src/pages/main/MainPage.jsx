import { useDispatch } from "react-redux";
import { MainPlaylist } from "../../components/MainPlaylist/MainPlaylist.jsx";
import { useGetAllTracksQuery } from "../../redux/services/playlists.js";
import { addAllTracks, setCurrentPage } from "../../redux/store/playerSlice.js";
import { useEffect } from "react";
import { MenuFilterDropdown } from "../../components/MainPlaylist/UI/MenuFilterDropdown/MenuFilterDropdown.jsx";
import * as S from "./MainPage.styles.js";

export const MainPage = ({ getAllTracksError }) => {
  const { data, error, isLoading } = useGetAllTracksQuery();
  const dispatch = useDispatch();
  dispatch(addAllTracks(data));

  useEffect(() => {
    if (data) dispatch(setCurrentPage("Main"));
  }, [data]);

  return (
    <>
      <S.MainCenterblockH2>Треки</S.MainCenterblockH2>
      <MenuFilterDropdown />

      <MainPlaylist
        getAllTracksError={getAllTracksError}
        tracks={data}
        error={error}
        isLoading={isLoading}
      />
    </>
  );
};
