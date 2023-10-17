import { useDispatch } from "react-redux";
import { MainPlaylist } from "../../components/MainPlaylist/MainPlaylist.jsx";
import { useGetAllTracksQuery } from "../../redux/services/playlists.js";
import { addAllTracks, setCurrentPage } from "../../redux/store/playerSlice.js";
import { useEffect } from "react";

export const MainPage = ({ getAllTracksError }) => {
  const { data, error, isLoading } = useGetAllTracksQuery();
  const dispatch = useDispatch();
  dispatch(addAllTracks(data));

  useEffect(() => {
    if (data) dispatch(setCurrentPage("Main"));
  }, [data]);

  return (
    <MainPlaylist
      getAllTracksError={getAllTracksError}
      tracks={data}
      error={error}
      isLoading={isLoading}
      title="Треки"
    />
  );
};
