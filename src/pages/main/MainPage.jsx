import { useEffect, useState } from "react";
import * as S from "./MainPage.styles.js";
import { Content } from "../../components/Content/Content";
import { Filter } from "../../components/Filter/Filter";
import { NavBar } from "../../components/NavBar/NavBar";
import { Search } from "../../components/Search/Search";
import { SideBar } from "../../components/SideBar/SideBar";
import { ALBUMS } from "../../constants.js";

export const MainPage = ({
  loading,
  allTracks,
  setCurrentTrack,
  getAllTracksError,
}) => {
  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavBar />
            <S.MainCenterblock>
              <Search />
              <S.MainCenterblockH2>Треки</S.MainCenterblockH2>
              <Filter />
              <Content
                loading={loading}
                allTracks={allTracks}
                setCurrentTrack={setCurrentTrack}
                getAllTracksError={getAllTracksError}
              />
            </S.MainCenterblock>
            <SideBar
              loading={loading}
              albums={ALBUMS}
            />
          </S.Main>
          <footer className="footer"></footer>
        </S.Container>
      </S.Wrapper>
    </>
  );
};
