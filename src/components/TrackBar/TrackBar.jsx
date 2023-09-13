import { useRef, useState } from "react";
import { styled } from "styled-components";
import * as S from "./TrackBar.styles.js";
import { TrackBarPanel } from "../TrackBarPanel/TrackBarPanel";
import { TrackBarPlayer } from "../TrackBarPlayer/TrackBarPlayer";
import { TrackBarVolume } from "../TrackBarVolume/TrackBarVolume";

export function TrackBar({ currentTrack }) {
  const [isPlaying, setIsPlaying] = useState(false);
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

  const [currentTime, setCurrentTime] = useState(0);
  const duration = currentTrack.duration_in_seconds;

  const BarPlayerProgress = styled.input`
    --progress-height: 8px;
    --progress-color: #b672ff;
    --progress-color: ${(props) => props.$color ?? "#b672ff"};

    --progress-bg-color: #2e2e2e;

    margin: 0;
    width: 100%;
    height: var(--progress-height);
    -webkit-appearance: none;
    cursor: pointer;
    background: transparent;
    position: relative;
    overflow: hidden;

    &::-webkit-slider-runnable-track {
      position: relative;
      height: var(--progress-height);
      background: var(--progress-bg-color);
    }
    &::-webkit-slider-thumb {
      --thumb-height: 1px;
      --thumb-width: 1px;
      position: relative;
      -webkit-appearance: none;
      width: var(--thumb-width, var(--thumb-height));
      box-shadow: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
        100vmax var(--progress-color);
    }

    &::-webkit-slider-runnable-track {
      background: var(--progress-bg-color);
    }

    /* FF */
    &::-moz-range-track {
      width: 100%;
      height: var(--progress-height);
      background: var(--progress-bg-color);
      border: none;
      border-radius: 0px;
    }
    &::-moz-range-thumb {
      border: none;
      height: 25px;
      width: 25px;
      border-radius: 50%;
      background: transparent;
    }
    &::-moz-range-progress {
      background-color: var(--progress-color);
      height: var(--progress-height);
    }
  `;

  return (
    <S.Bar>
      <S.BarContent>
        <audio
          controls
          ref={audioRef}
          src={currentTrack.track_file}
          type="audio/mpeg"
        ></audio>

        <BarPlayerProgress
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          step={0.01}
          onChange={(event) => setCurrentTime(event.target.value)}
          $color="#ff0000"
        ></BarPlayerProgress>

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
