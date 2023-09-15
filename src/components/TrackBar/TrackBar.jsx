import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import * as S from "./TrackBar.styles.js";
import { TrackBarPanel } from "../TrackBarPanel/TrackBarPanel";
import { TrackBarPlayer } from "../TrackBarPlayer/TrackBarPlayer";
import { TrackBarVolume } from "../TrackBarVolume/TrackBarVolume";

export function TrackBar({ currentTrack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentDuration, setCurrentDuration] = useState(0);
  const [volume, setVolume] = useState(60);

  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };
  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = isPlaying ? handleStop : handleStart;

  const duration = currentTrack.duration_in_seconds;

  const handleProgress = () => {
    const currentProgress = audioRef.current.currentTime;
    setCurrentTime(currentProgress);
  };

  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
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
            $color="#ff0000"
          ></S.BarPlayerProgress>

          <S.BarPlayerBlock>
            <S.BarPlayer>
              <TrackBarPanel
                currentTrack={currentTrack}
                togglePlay={togglePlay}
                isPlaying={isPlaying}
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
    </>
  );
}
