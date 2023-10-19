import { useEffect, useRef, useState } from "react";
import * as S from "./TrackBar.styles.js";
import { TrackBarPanel } from "./TrackBarPanel/TrackBarPanel.jsx";
import { TrackBarPlayer } from "./TrackBarPlayer/TrackBarPlayer";
import { TrackBarVolume } from "./TrackBarVolume/TrackBarVolume.jsx";
import { useDispatch, useSelector } from "react-redux";
import { togglePlayer, nextTrack } from "../../redux/store/playerSlice.js";
import { formatTimeTool } from "../../utils/formatTime";

export function TrackBar() {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentDuration, setCurrentDuration] = useState(0);
  const [volume, setVolume] = useState(60);
  const [repeat, setRepeat] = useState(false);

  const currentUser = localStorage.getItem("user");

  const dispatch = useDispatch();
  const currentTrack = useSelector((state) => state.audioplayer.track);
  const isPlaying = useSelector((state) => state.audioplayer.playing);

  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  const duration = () => {
    if (currentTrack) {
      currentTrack.duration_in_seconds;
    }
  };

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  // // auto playing track by clicking on track and switch track
  useEffect(() => {
    if (currentTrack.id) {
      dispatch(togglePlayer(true));
      return;
    } else {
      dispatch(togglePlayer(false));
    }
  }, [currentTrack.id]);

  // // play/pause track
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef, currentTrack.id]);

  const handleProgress = () => {
    const currentProgress = audioRef.current.currentTime;
    setCurrentTime(currentProgress);
  };
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };
  const handleRepeat = () => {
    if (audioRef.current) {
      audioRef.current.loop = !repeat;
      setRepeat(!repeat);
    }
  };

  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setCurrentDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <>
      <S.InitPlayer
        controls
        ref={audioRef}
        src={currentTrack.track_file}
        onTimeUpdate={handleProgress}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={() => dispatch(nextTrack())}
        type="audio/mpeg"
      ></S.InitPlayer>
      {currentUser ? (
        <S.BarContainer>
          <S.Bar>
            <S.TimeBar>
              {formatTimeTool(currentTime)} /{formatTimeTool(currentDuration)}
            </S.TimeBar>
            <S.BarContent>
              <S.BarPlayerProgress
                type="range"
                min={0}
                max={duration}
                value={currentTime}
                step={0.01}
                ref={progressBarRef}
                onChange={handleProgressChange}
                $color="#B672FF"
              ></S.BarPlayerProgress>

              <S.BarPlayerBlock>
                <S.BarPlayer>
                  <TrackBarPanel
                    handleRepeat={handleRepeat}
                    repeat={repeat}
                  />
                  <TrackBarPlayer />
                </S.BarPlayer>
                <TrackBarVolume
                  volume={volume}
                  setVolume={setVolume}
                />
              </S.BarPlayerBlock>
            </S.BarContent>
          </S.Bar>
        </S.BarContainer>
      ) : null}
    </>
  );
}
