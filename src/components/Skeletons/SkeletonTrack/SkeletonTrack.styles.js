import { styled } from "styled-components";

export const TrackPlayContainSkeleton = styled.div`
  display: grid;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: "image author" "image album";
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
export const TrackPlayImgSkeleton = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column: 1;
  grid-area: image;
`;

export const TrackPlayAuthorSkeleton = styled.div`
width: 59px;
height: 15px;
background-color: #313131;

-ms-grid-row: 1;
-ms-grid-column: 2;
grid-area: author;
min-width: 49px;
}`;

export const TrackPlayAlbomSkeleton = styled.div`
  width: 59px;
  height: 15px;
  background-color: #313131;

  -ms-grid-row: 2;
  -ms-grid-column: 2;
  grid-area: album;
  min-width: 49px;
`;
