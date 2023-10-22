import { useParams } from "react-router-dom";
import { ALBUMS } from "../../data.js";
import { useDispatch } from "react-redux";
import { useGetSelectionsQuery } from "../../redux/services/playlists.js";
import { MainPlaylist } from "../../components/MainPlaylist/MainPlaylist.jsx";
import * as S from "./CategoriesPage.styles.js";

export const CategoriesPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const album = ALBUMS.find((album) => album.id === Number(params.id));

  const { data, error, isLoading } = useGetSelectionsQuery(Number(params.id));

  return (
    <>
      {isLoading ? null : (
        <>
          <S.MainCenterblockH2>{album.name}</S.MainCenterblockH2>
          <MainPlaylist
            tracks={data.items}
            getAllTracksError={error}
            isLoading={isLoading}
          />
        </>
      )}
    </>
  );
};
