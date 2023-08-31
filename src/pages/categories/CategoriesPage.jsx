import { useParams } from "react-router-dom";
import { ALBUMS } from "../../constants.js";

export const CategoriesPage = () => {
  const params = useParams();

  const album = ALBUMS.find((album) => album.id === Number(params.id));
  console.log(album);

  return (
    <section>
      <h1>Category {album.id}</h1>
      <h3>{album.playlistName}</h3>
    </section>
  );
};
