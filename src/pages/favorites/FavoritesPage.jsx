import { useDispatch, useSelector } from "react-redux";
import { MainPlaylist } from "../../components/MainPlaylist/MainPlaylist.jsx";
import {
  useGetFavTracksQuery,
  useLazyGetFavTracksQuery,
  usePostTokenRefreshMutation,
} from "../../redux/services/playlists.js";
import { useEffect } from "react";
import { setAccessToken } from "../../redux/store/tokenSlice.js";
import { addMyTracks } from "../../redux/store/playerSlice.js";

export const FavoritesPage = () => {
  const dispatch = useDispatch();

  const { isLoading } = useGetFavTracksQuery();
  const [fetchFavorite] = useLazyGetFavTracksQuery();
  const refresh = window.localStorage.getItem("refreshToken");
  const [postTokenRefresh, {}] = usePostTokenRefreshMutation();

  const favoriteError = null;

  useEffect(() => {
    postTokenRefresh({ refresh })
      .unwrap()
      .then((newToken) => {
        dispatch(setAccessToken({ token: newToken.access }));
        fetchFavorite()
          .unwrap()
          .then((data) => {
            dispatch(addMyTracks(data));
          })
          .catch((error) => {
            console.log(error);
            favoriteError = error;
          });
      });
  }, [refresh]);

  const myFavTracks = useSelector(
    (state) => state.audioplayer.playlistFavorite
  );

  return (
    <>
      <MainPlaylist
        tracks={myFavTracks}
        getAllTracksError={favoriteError}
        isLoading={isLoading}
        title="Мои треки"
      />
    </>
  );
};
