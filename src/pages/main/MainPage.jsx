import { useEffect, useState } from "react";
import * as S from "./MainPage.styles.js";
import { Content } from "../../components/Content/Content";
import { Filter } from "../../components/Filter/Filter";
import { NavBar } from "../../components/NavBar/NavBar";
import { Search } from "../../components/Search/Search";
import { SideBar } from "../../components/SideBar/SideBar";
import { TrackBar } from "../../components/TrackBar/TrackBar";
import { ALBUMS } from "../../constants.js";

export const MainPage = ({ user, setUser, allTracks, setCurrentTrack }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavBar
              user={user}
              setUser={setUser}
            />
            <S.MainCenterblock>
              <Search />
              <S.MainCenterblockH2>Треки</S.MainCenterblockH2>
              <Filter />
              <Content
                loading={loading}
                allTracks={allTracks}
                setCurrentTrack={setCurrentTrack}
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
