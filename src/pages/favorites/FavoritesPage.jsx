import { useDispatch, useSelector } from "react-redux";
import { MainPlaylist } from "../../components/MainPlaylist/MainPlaylist.jsx";
import {
  useGetFavTracksQuery,
  useLazyGetFavTracksQuery,
  usePostTokenRefreshMutation,
} from "../../services/playlists.js";
import { useEffect } from "react";
import { setAccessToken } from "../../store/tokenSlice.js";
import { addMyTracks } from "../../store/playerSlice.js";

export const FavoritesPage = () => {
  const dispatch = useDispatch();

  const { isLoading } = useGetFavTracksQuery();
  const [fetchFavorite] = useLazyGetFavTracksQuery();
  const refresh = window.localStorage.getItem("refreshToken");
  const [postTokenRefresh, {}] = usePostTokenRefreshMutation();

  useEffect(() => {
    postTokenRefresh({ refresh })
      .unwrap()
      .then((newToken) => {
        console.log(newToken);
        dispatch(setAccessToken({ token: newToken.access }));
        fetchFavorite()
          .unwrap()
          .then((data) => {
            console.log(data);
            dispatch(addMyTracks(data));
          })
          .catch((error) => console.log(error));
      });
  }, [refresh]);

  const myFavTracks = useSelector(
    (state) => state.audioplayer.playlistFavorite
  );

  return (
    <>
      <MainPlaylist
        tracks={myFavTracks}
        isLoading={isLoading}
        title="Мои треки"
      />
    </>
  );
};
