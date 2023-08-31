import React from "react";
import * as S from "./SideBar.styles.js";
import SideBarPersonal from "../SideBarPersonal/SideBarPersonal";
import SideBarBlock from "../SideBarBlock/SideBarBlock";

export default function SideBar({ loading, albums }) {
  return (
    <S.MainSidebar className="main__sidebar sidebar">
      <SideBarPersonal loading={loading} />
      <SideBarBlock
        loading={loading}
        albums={albums}
      />
    </S.MainSidebar>
  );
}
