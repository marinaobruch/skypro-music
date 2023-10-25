import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./TrackBarPlayer.styles.js";
import {
  useSetLikeMutation,
  useSetUnlikeMutation,
  useGetTrackByIdQuery,
} from "../../../redux/services/playlists.js";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../../../redux/store/userSlice.js";

export const TrackBarPlayer = () => {
  const [isLike, setIsLike] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentTrack = useSelector((state) => state.audioplayer.track);
  const userId = Number(useSelector((state) => state.user.id));

  const [setLike, {}] = useSetLikeMutation();
  const [setUnlike, {}] = useSetUnlikeMutation();

  const { data } = useGetTrackByIdQuery(Number(currentTrack?.id));

  useEffect(() => {
    if (userId && currentTrack) {
      setIsLike(
        (currentTrack.stared_user ?? []).some((user) => user.id === userId)
      );
    }
  }, [userId, currentTrack?.stared_user, currentTrack]);

  const logout = () => {
    dispatch(userLogout());
    navigate("/login");
  };

  const toggleStarred = () => {
    if ((currentTrack.stared_user ?? []).find((user) => user.id === userId)) {
      setUnlike(currentTrack)
        .unwrap()
        .catch((error) => {
          console.log(error);
          navigate("/login");
          logout();
        });
      setIsLike(false);
    } else {
      setLike(currentTrack)
        .unwrap()
        .catch((error) => {
          console.log(error);
          navigate("/login");
          logout();
        });
      setIsLike(true);
    }
  };

  return (
    <S.PlayerTrackPlay>
      <S.TrackPlayContain>
        <S.TrackPlayImg>
          <S.TrackPlaySvg alt="music">
            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
          </S.TrackPlaySvg>
        </S.TrackPlayImg>
        <S.TrackAuthor>
          <S.TrackAuthorLink href="#">{currentTrack.name}</S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackPlayAlbum>
          <S.TrackPlayAlbumLink href="#">
            {currentTrack.author}
          </S.TrackPlayAlbumLink>
        </S.TrackPlayAlbum>
      </S.TrackPlayContain>
      <S.TrackPlayLikeDis>
        <S.TrackPlayLike onClick={() => toggleStarred()}>
          <S.TrackPlayLikeSvg alt="like">
            {isLike ? (
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
              <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
            )}
          </S.TrackPlayLikeSvg>
        </S.TrackPlayLike>
      </S.TrackPlayLikeDis>
    </S.PlayerTrackPlay>
  );
};
