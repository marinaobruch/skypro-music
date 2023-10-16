import { useDispatch } from "react-redux";
import { MainPlaylist } from "../../components/MainPlaylist/MainPlaylist.jsx";
import { useGetAllTracksQuery } from "../../redux/services/playlists.js";
import { addAllTracks } from "../../redux/store/playerSlice.js";

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
