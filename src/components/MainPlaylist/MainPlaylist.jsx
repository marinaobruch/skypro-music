import * as S from "./MainPlaylist.styles.js";
import { useDispatch, useSelector } from "react-redux";
import { SkeletonPlaylist } from "../Skeletons/SkeletonPlaylist/SkeletonPlaylist.jsx";
import { addCurrentTrack } from "../../redux/store/playerSlice.js";
import {
  useSetLikeMutation,
  useSetUnlikeMutation,
} from "../../redux/services/playlists.js";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../../redux/store/userSlice.js";
import { formatTimeTool } from "../../utils/formatTime";

export function MainPlaylist({ getAllTracksError, tracks, isLoading }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentTrack = useSelector((state) => state.audioplayer.track);
  const isPlaying = useSelector((state) => state.audioplayer.playing);
  const userId = Number(useSelector((state) => state.user.id));

  const [setLike, {}] = useSetLikeMutation();
  const [setUnlike, {}] = useSetUnlikeMutation();

  const logout = () => {
    dispatch(userLogout());
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  };

  const toggleStarred = (track) => {
    if ((track.stared_user ?? []).find((user) => user.id === userId)) {
      setUnlike(track)
        .unwrap()
        .catch((error) => {
          console.log(error);
          navigate("/login");
          logout();
        });
    } else if (!track.stared_user) {
      setUnlike(track)
        .unwrap()
        .catch((error) => {
          console.log(error);
          navigate("/login");
          logout();
        });
    } else {
      setLike(track)
        .unwrap()
        .catch((error) => {
          console.log(error);
          navigate("/login");
          logout();
        });
    }
  };

  return (
    <S.ContentPlaylist>
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

      <S.PlaylistItem>
        {getAllTracksError ? (
          <p>
            Не удалось загрузить плейлист, попробуйте позже: {getAllTracksError}
          </p>
        ) : null}

        {isLoading ? (
          <>
            <SkeletonPlaylist />
            <SkeletonPlaylist />
            <SkeletonPlaylist />
            <SkeletonPlaylist />
            <SkeletonPlaylist />
            <SkeletonPlaylist />
            <SkeletonPlaylist />
            <SkeletonPlaylist />
            <SkeletonPlaylist />
            <SkeletonPlaylist />
            <SkeletonPlaylist />
            <SkeletonPlaylist />
          </>
        ) : (
          <>
            {tracks.map((track) => (
              <S.PlaylistTrack
                key={track.id}
                onClick={() =>
                  dispatch(addCurrentTrack({ track: track, tracks: tracks }))
                }
              >
                <S.TrackTitle>
                  <S.TrackTitleImg>
                    {currentTrack && currentTrack.id === track.id ? (
                      isPlaying ? (
                        <S.playingdot></S.playingdot>
                      ) : (
                        <S.simpledot></S.simpledot>
                      )
                    ) : (
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                      </S.TrackTitleSvg>
                    )}
                  </S.TrackTitleImg>
                  <div className="track__title-text">
                    <S.TrackTitleLink href="#">
                      {track.name}
                      <S.TrackTitleSpan></S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  </div>
                </S.TrackTitle>

                <S.TrackAuthor>
                  <S.TrackAuthorLink
                    className="track__author-link"
                    href="#"
                  >
                    {track.author}
                  </S.TrackAuthorLink>
                </S.TrackAuthor>

                <S.TrackAlbom>
                  <S.TrackAlbomLink href="#">{track.album}</S.TrackAlbomLink>
                </S.TrackAlbom>

                <S.TrackTimeText
                  onClick={(e) => {
                    toggleStarred(track);
                    e.stopPropagation();
                  }}
                >
                  <S.TrackTimeSvg alt="time">
                    {(track.stared_user ?? []).find(
                      (user) => user.id === userId
                    ) || !track.stared_user ? (
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.36529 12.751C14.2458 9.25098 17.3111 3.96019 13.9565 1.51832C11.7563 -0.0832586 9.29718 1.19273 8.36529 2.00669H8.34378H8.34372H8.32221C7.39032 1.19273 4.93121 -0.0832586 2.73102 1.51832C-0.623552 3.96019 2.44172 9.25098 8.32221 12.751H8.34372H8.34378H8.36529Z"
                          fill="#B672FF"
                        />
                        <path
                          d="M8.34372 2.00669H8.36529C9.29718 1.19273 11.7563 -0.0832586 13.9565 1.51832C17.3111 3.96019 14.2458 9.25098 8.36529 12.751H8.34372M8.34378 2.00669H8.32221C7.39032 1.19273 4.93121 -0.0832586 2.73102 1.51832C-0.623552 3.96019 2.44172 9.25098 8.32221 12.751H8.34378"
                          stroke="#B672FF"
                        />
                      </svg>
                    ) : (
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    )}
                  </S.TrackTimeSvg>
                  <span className="track__time-text">
                    {formatTimeTool(track.duration_in_seconds)}
                  </span>
                </S.TrackTimeText>
              </S.PlaylistTrack>
            ))}
          </>
        )}
      </S.PlaylistItem>
    </S.ContentPlaylist>
  );
}
