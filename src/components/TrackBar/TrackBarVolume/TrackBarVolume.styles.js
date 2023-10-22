import { styled } from "styled-components";

export const BarVolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
`;
export const VolumeContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`;
export const VolumeImg = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`;
export const VolumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`;
export const VolumeProgress = styled.div`
  width: 109px;
`;

export const VolumeProgressLine = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 110px;
  cursor: pointer;
  outline: none;
  height: 2px;
  background: #797979;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 12px;
    width: 12px;
    background-color: #1a1a1a;
    border-radius: 50%;
    border: 2px solid white;
    transition: 0.2s ease-in-out;
  }
  &::-webkit-slider-thumb:hover {
    transform: scale(1.2);
    background-color: #b672ff;
  }

  &::-moz-range-thumb {
    height: 12px;
    width: 12px;
    background-color: #f50;
    border-radius: 50%;
    border: 2px solid #fff;
    transition: 0.2s ease-in-out;
  }
`;
