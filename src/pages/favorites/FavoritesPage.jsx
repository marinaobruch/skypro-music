import { useDispatch, useSelector } from "react-redux";
import { MainPlaylist } from "../../components/MainPlaylist/MainPlaylist.jsx";
import {
  useGetFavTracksQuery,
  usePostTokenRefreshMutation,
} from "../../services/playlists.js";
import { addMyTracks } from "../../store/playerSlice.js";
import { useEffect } from "react";

export const FavoritesPage = () => {
  const { data, error, isLoading } = useGetFavTracksQuery();
  const [postTokenRefresh, {}] = usePostTokenRefreshMutation();
  const refreshToken = window.localStorage.getItem("refreshToken");

  const dispatch = useDispatch();
  dispatch(addMyTracks(data));

  useEffect(() => {
    postTokenRefresh({ refreshToken })
      .unwrap()
      .then((newToken) => {
        console.log(newToken);
      });
  }, [dispatch, refreshToken]);

  return (
    <MainPlaylist
      tracks={data}
      error={error}
      isLoading={isLoading}
      title="Мои треки"
    />
  );
};
