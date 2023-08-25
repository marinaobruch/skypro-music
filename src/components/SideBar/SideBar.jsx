import React from "react";
import * as S from "./SideBar.styles.js";
import SideBarPersonal from "../SideBarPersonal/SideBarPersonal";
import SideBarBlock from "../SideBarBlock/SideBarBlock";

export default function SideBar({ loading }) {
  return (
    <S.MainSidebar className="main__sidebar sidebar">
      <SideBarPersonal loading={loading} />
      <SideBarBlock loading={loading} />
    </S.MainSidebar>
  );
}
