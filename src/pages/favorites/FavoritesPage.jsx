import { useDispatch } from "react-redux";
import { MainPlaylist } from "../../components/MainPlaylist/MainPlaylist.jsx";
import { useGetFavTracksQuery } from "../../services/playlists.js";
import { addMyTracks } from "../../store/playerSlice.js";

export const FavoritesPage = () => {
  const { data, error, isLoading } = useGetFavTracksQuery();
  const dispatch = useDispatch();

  dispatch(addMyTracks(data));

  return (
    <MainPlaylist
      tracks={data}
      error={error}
      isLoading={isLoading}
      title="Мои треки"
    />
  );
};
