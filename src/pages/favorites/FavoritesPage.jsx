import { useGetNewTracksQuery } from "../../services/playlists";
import { MainPlaylist } from "../../components/MainPlaylist/MainPlaylist";

export const FavoritesPage = () => {
  const { data, error, isLoading } = useGetNewTracksQuery();

  return (
    <>
      <div></div>
      <MainPlaylist
        tracks={data}
        error={error}
        isLoading={isLoading}
        title="Мои Треки"
      />
    </>
  );
};
