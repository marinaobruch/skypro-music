import styled, { createGlobalStyle } from "styled-components";

export const MainCenterblockH2 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`;

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  }

  *&:before,
  *&:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  a,
  a:&visited {
    text-decoration: none;
    font-family: "StratosSkyeng", sans-serif;
    cursor: pointer;
  }

  button
  {
    cursor: pointer;
  }

  ul  {
  list-style: none;
  }

  li {
  list-style: none;
  }

  html,
  body {
  width: 100%;
  height: 100%;
  font-family: "StratosSkyeng", sans-serif;
  color: #ffffff;
  }


  @font-face {
      font-family: "StratosSkyeng";
      src:
        local("StratosSkyeng"),
        local("StratosSkyeng"),
        url("/fonts/StratosSkyeng.woff2") format("woff2"),
        url("/fonts/StratosSkyeng.woff") format("woff");
      font-weight: 400;
      font-style: normal;
    }
`;
