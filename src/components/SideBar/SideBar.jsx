import React from "react";
import * as S from "./SideBar.styles.js";
import { SideBarPersonal } from "../SideBarPersonal/SideBarPersonal";
import { SideBarBlock } from "../SideBarBlock/SideBarBlock";
import { UserContext } from "../../contexts/user.jsx";

export function SideBar({ loading, albums }) {
  return (
    <S.MainSidebar className="main__sidebar sidebar">
      <UserContext.Consumer>
        {(user) => (
          <SideBarPersonal
            loading={loading}
            user={user}
          />
        )}
      </UserContext.Consumer>
      <SideBarBlock
        loading={loading}
        albums={albums}
      />
    </S.MainSidebar>
  );
}
