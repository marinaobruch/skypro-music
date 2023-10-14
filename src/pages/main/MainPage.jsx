import { useDispatch } from "react-redux";
import { MainPlaylist } from "../../components/MainPlaylist/MainPlaylist.jsx";
import { useGetAllTracksQuery } from "../../services/playlists.js";
import { addAllTracks } from "../../store/playerSlice.js";

export const MainPage = ({ getAllTracksError }) => {
  const { data, error, isLoading } = useGetAllTracksQuery();

  const dispatch = useDispatch();
  dispatch(addAllTracks(data));

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
