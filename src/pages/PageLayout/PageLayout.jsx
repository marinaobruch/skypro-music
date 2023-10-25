import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import { SideBar } from "../../components/SideBar/SideBar";
import { ALBUMS } from "../../data.js";
import * as S from "./PageLayout.styles";
import { TrackBar } from "../../components/TrackBar/TrackBar";
import { Search } from "../../components/Search/Search";
import { useSelector } from "react-redux";
import { useState } from "react";

export const PageLayout = ({ loading }) => {
  const currentTrack = useSelector((state) => state.audioplayer.track);
  const [searchQuery, setSearchQuery] = useState();

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavBar />
            <S.MainCenterblock>
              <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <Outlet searchQuery={searchQuery} />
            </S.MainCenterblock>
            <SideBar
              loading={loading}
              albums={ALBUMS}
            />
          </S.Main>
          {currentTrack ? <TrackBar /> : null}
        </S.Container>
      </S.Wrapper>
    </>
  );
};
