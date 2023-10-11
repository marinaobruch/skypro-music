import { MainPlaylist } from "../../components/MainPlaylist/MainPlaylist.jsx";
import { useGetAllTracksQuery } from "../../services/playlists.js";

export const MainPage = ({ getAllTracksError }) => {
  const { data, error, isLoading } = useGetAllTracksQuery();
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
