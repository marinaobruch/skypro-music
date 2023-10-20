import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import { SideBar } from "../../components/SideBar/SideBar";
import { ALBUMS } from "../../data.js";
import * as S from "./PageLayout.styles";
import { TrackBar } from "../../components/TrackBar/TrackBar";
import { Search } from "../../components/Search/Search";
import { useSelector } from "react-redux";

export const PageLayout = ({ loading }) => {
  const currentTrack = useSelector((state) => state.audioplayer.track);

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavBar />
            <S.MainCenterblock>
              <Search />
              <Outlet />
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
