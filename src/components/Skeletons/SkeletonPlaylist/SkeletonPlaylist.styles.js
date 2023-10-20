import { styled } from "styled-components";

export const PlaylistSkeleton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

export const SkeletonTrack = styled.div`
  width: 51px;
  height: 51px;
  background: #313131;
`;

export const SkeletonTrackName = styled.div`
  width: 356px;
  height: 19px;
  background: #313131;
`;

export const SkeletonAuthor = styled.div`
  width: 271px;
  height: 19px;
  background: #313131;
`;

export const SkeletonAlbom = styled.div`
  width: 370px;
  height: 19px;
  background: #313131;
`;
