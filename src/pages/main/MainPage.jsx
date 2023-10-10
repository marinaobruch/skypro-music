import * as S from "./MainPage.styles.js";
import { MainContent } from "../../components/MainContent/MainContent.jsx";
import { Filter } from "../../components/Filter/Filter";

export const MainPage = ({ loading, getAllTracksError }) => {
  return (
    <>
      <S.MainCenterblockH2>Треки</S.MainCenterblockH2>
      <Filter />
      <MainContent
        loading={loading}
        getAllTracksError={getAllTracksError}
      />
    </>
  );
};

// export const MainPage = ({ loading, getAllTracksError }) => {
//   return (
//     <>
//       <S.GlobalStyle />
//       <S.Wrapper>
//         <S.Container>
//           <S.Main>
//             <NavBar />
//             <S.MainCenterblock>
//               <Search />
//               <S.MainCenterblockH2>Треки</S.MainCenterblockH2>
//               <Filter />
//               <Content
//                 loading={loading}
//                 getAllTracksError={getAllTracksError}
//               />
//             </S.MainCenterblock>
//             <SideBar
//               loading={loading}
//               albums={ALBUMS}
//             />
//           </S.Main>
//         </S.Container>
//       </S.Wrapper>
//     </>
//   );
// };
