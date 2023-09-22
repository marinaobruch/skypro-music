import { useEffect, useRef, useState } from "react";
import * as S from "./TrackBar.styles.js";
import { TrackBarPanel } from "../TrackBarPanel/TrackBarPanel";
import { TrackBarPlayer } from "../TrackBarPlayer/TrackBarPlayer";
import { TrackBarVolume } from "../TrackBarVolume/TrackBarVolume";
import { useAuth } from "../../WithAuth.jsx";

export function TrackBar({ currentTrack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentDuration, setCurrentDuration] = useState(0);
  const [volume, setVolume] = useState(60);
  const [repeat, setRepeat] = useState(false);
  const { auth, login, logout } = useAuth();

  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  const duration = currentTrack.duration_in_seconds;

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  // play/pause track
  useEffect(() => {
    if (isPlaying && auth) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef, login, logout]);

  // auto playing track by clicking on track
  useEffect(() => {
    if (currentTrack.track_file && auth) {
      setIsPlaying(true);
    }
    setIsPlaying(false);
  }, [currentTrack.track_file]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };
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

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  return (
    <>
      <audio
        controls
        ref={audioRef}
        src={currentTrack.track_file}
        onTimeUpdate={handleProgress}
        onLoadedMetadata={onLoadedMetadata}
        type="audio/mpeg"
      ></audio>
      {auth ? (
        <S.Bar>
          <S.TimeBar>
            {formatTime(currentTime)} /{formatTime(currentDuration)}
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
                  currentTrack={currentTrack}
                  togglePlayPause={togglePlayPause}
                  isPlaying={isPlaying}
                  handleRepeat={handleRepeat}
                  repeat={repeat}
                />
                <TrackBarPlayer currentTrack={currentTrack} />
              </S.BarPlayer>
              <TrackBarVolume
                volume={volume}
                setVolume={setVolume}
              />
            </S.BarPlayerBlock>
          </S.BarContent>
        </S.Bar>
      ) : null}
    </>
  );
}
