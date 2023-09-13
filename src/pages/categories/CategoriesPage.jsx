import { useParams } from "react-router-dom";
import { ALBUMS } from "../../constants.js";
import * as S from "./CategoriesPage.styles";

export const CategoriesPage = () => {
  const params = useParams();

  const album = ALBUMS.find((album) => album.id === Number(params.id));
  console.log(album);

  return (
    <section>
      <S.CategoriesHeader>Category {album.id}</S.CategoriesHeader>
      <S.CategoriesText>{album.playlistName}</S.CategoriesText>
    </section>
  );
};
