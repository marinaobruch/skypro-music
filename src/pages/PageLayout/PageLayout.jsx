import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import { SideBar } from "../../components/SideBar/SideBar";
import { ALBUMS } from "../../constants.js";
import * as S from "./PageLayout.styles";
import { TrackBar } from "../../components/TrackBar/TrackBar";
import { Search } from "../../components/Search/Search";

export const PageLayout = ({ loading }) => {
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
          <TrackBar />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

{
}