import { styled } from "styled-components";

export const FavHeader = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`;

export const ContentTitle = styled.div`
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
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`;
export const PlaylistTitleCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`;
export const PlaylistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;
export const PlaylistTitleCol1 = styled(PlaylistTitleCol)`
  width: 447px;
`;
export const PlaylistTitleCol2 = styled(PlaylistTitleCol)`
  width: 321px;
`;
export const PlaylistTitleCol3 = styled(PlaylistTitleCol)`
  width: 245px;
`;
export const PlaylistTitleCol4 = styled(PlaylistTitleCol)`
  width: 60px;
  text-align: end;
`;
