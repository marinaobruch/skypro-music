import React from "react";
import "./SideBar.css";
import SideBarPersonal from "../SideBarPersonal/SideBarPersonal";
import SideBarBlock from "../SideBarBlock/SideBarBlock";

export default function SideBar() {
  return (
    <div className="main__sidebar sidebar">
      <SideBarPersonal />
      <SideBarBlock />
    </div>
  );
}
