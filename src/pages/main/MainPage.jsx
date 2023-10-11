import { MainPlaylist } from "../../components/MainPlaylist/MainPlaylist.jsx";
import { useGetAllTracksQuery } from "../../services/playlists.js";

export const MainPage = ({ loading, getAllTracksError }) => {
  const { data, error, isLoading } = useGetAllTracksQuery();
  return (
    <>
      <MainPlaylist
        loading={loading}
        getAllTracksError={getAllTracksError}
      />
    </>
  );
};
