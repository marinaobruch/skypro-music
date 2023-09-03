import React from "react";
import * as S from "./TrackBar.styles.js";
import { TrackBarPanel } from "../TrackBarPanel/TrackBarPanel";
import { TrackBarPlayer } from "../TrackBarPlayer/TrackBarPlayer";
import { TrackBarVolume } from "../TrackBarVolume/TrackBarVolume";

export function TrackBar({ loading }) {
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress></S.BarPlayerProgress>

        <S.BarPlayerBlock>
          <S.BarPlayer>
            <TrackBarPanel />
            <TrackBarPlayer loading={loading} />
          </S.BarPlayer>
          <TrackBarVolume />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}
