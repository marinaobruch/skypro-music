import { Filter } from "../../components/Filter/Filter";
import * as S from "./FavoritesPage.styles";

export const FavoritesPage = () => {
  return (
    <div>
      <S.FavHeader>Мои треки</S.FavHeader>
      <Filter />

      <S.ContentTitle>
        <S.PlaylistTitleCol1>Трек</S.PlaylistTitleCol1>
        <S.PlaylistTitleCol2>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol2>
        <S.PlaylistTitleCol3>АЛЬБОМ</S.PlaylistTitleCol3>
        <S.PlaylistTitleCol4>
          <S.PlaylistTitleSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </S.PlaylistTitleSvg>
        </S.PlaylistTitleCol4>
      </S.ContentTitle>
    </div>
  );
};
