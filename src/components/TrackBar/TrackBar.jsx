import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import * as S from "./TrackBar.styles.js";
import { TrackBarPanel } from "../TrackBarPanel/TrackBarPanel";
import { TrackBarPlayer } from "../TrackBarPlayer/TrackBarPlayer";
import { TrackBarVolume } from "../TrackBarVolume/TrackBarVolume";

export function TrackBar({ currentTrack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

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
  const minForPlayer = Math.floor(duration / 60);
  const secForPlayer = Math.floor(minForPlayer % 60);
  const handleProgress = () => {
    const currentProgress = audioRef.current.currentTime;
    setCurrentTime(currentProgress);
  };
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  return (
    <>
      <audio
        controls
        ref={audioRef}
        src={currentTrack.track_file}
        onTimeUpdate={handleProgress}
        type="audio/mpeg"
      ></audio>
      <S.Bar>
        <S.TimeBar>
          Current time /{minForPlayer}:{secForPlayer}
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
            <TrackBarVolume />
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    </>
  );
}
