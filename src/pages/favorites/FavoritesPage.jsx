import { useSelector } from "react-redux";
import { MainPlaylist } from "../../components/MainPlaylist/MainPlaylist.jsx";
import { useGetFavTracksQuery } from "../../services/playlists.js";

export const FavoritesPage = () => {
  const { data, error, isLoading } = useGetFavTracksQuery();
  const currentToken = useSelector((state) => state.user.token);
  console.log(currentToken);

  return (
    <MainPlaylist
      tracks={data}
      error={error}
      isLoading={isLoading}
      title="Мои треки"
    />
  );
};
