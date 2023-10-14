import { useDispatch, useSelector } from "react-redux";
import { MainPlaylist } from "../../components/MainPlaylist/MainPlaylist.jsx";
import {
  useGetFavTracksQuery,
  usePostTokenRefreshMutation,
} from "../../services/playlists.js";
import { useEffect } from "react";
import { setAccessToken } from "../../store/tokenSlice.js";

export const FavoritesPage = () => {
  const { data, error, isLoading } = useGetFavTracksQuery();
  const dispatch = useDispatch();

  const refreshToken = useSelector((state) => state.token.refreshToken);
  console.log(refreshToken);

  let accessToken = useSelector((state) => state.token.accessToken);
  const [getRefreshToken, {}] = usePostTokenRefreshMutation();
  console.log(accessToken);

  // useEffect(() => {
  //   getRefreshToken({ refreshToken })
  //     .unwrap()
  //     .then((newAccessToken) => {
  //       accessToken = newAccessToken;
  //       dispatch(setAccessToken({ token: accessToken }));
  //     });
  //   console.log(accessToken);
  // }, [dispatch, refreshToken]);

  return (
    <MainPlaylist
      tracks={data}
      error={error}
      isLoading={isLoading}
      title="Мои треки"
    />
  );
};
