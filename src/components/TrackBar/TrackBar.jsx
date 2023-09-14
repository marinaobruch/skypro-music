import { useRef, useState } from "react";
import { styled } from "styled-components";
import * as S from "./TrackBar.styles.js";
import { TrackBarPanel } from "../TrackBarPanel/TrackBarPanel";
import { TrackBarPlayer } from "../TrackBarPlayer/TrackBarPlayer";
import { TrackBarVolume } from "../TrackBarVolume/TrackBarVolume";

export function TrackBar({ currentTrack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

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

  return (
    <S.Bar>
      <S.BarContent>
        <audio
          controls
          ref={audioRef}
          src={currentTrack.track_file}
          onTimeUpdate={handleProgress}
          type="audio/mpeg"
        ></audio>

        <S.BarPlayerProgress
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          step={0.01}
          onChange={(event) => setCurrentTime(event.target.value)}
          $color="#ff0000"
        ></S.BarPlayerProgress>

        <S.BarPlayerBlock>
          <S.BarPlayer>
            <TrackBarPanel
              currentTrack={currentTrack}
              togglePlay={togglePlay}
            />
            <TrackBarPlayer currentTrack={currentTrack} />
          </S.BarPlayer>
          <TrackBarVolume />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}
