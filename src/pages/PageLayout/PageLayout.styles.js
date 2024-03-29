import styled, { createGlobalStyle } from 'styled-components'

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
  /* полоса прокрутки (скроллбар) */
  ::-webkit-scrollbar {
  width: 4px; /* ширина для вертикального скролла */
  height: 0px; /* высота для горизонтального скролла */
  background-color: #4b4949;
  }
  ::-webkit-scrollbar-track {
      background-color: #000;
  }
  
  /* ползунок скроллбара */
  ::-webkit-scrollbar-thumb {
  background-color: #4b4949;
  border-radius: 9em;
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
`

export const Wrapper = styled.div`
	width: 100%;
	min-height: 100%;
	overflow: hidden;
	background-color: #383838;
`
export const Container = styled.div`
	max-width: 1920px;
	height: 100vh;
	margin: 0 auto;
	position: relative;
	background-color: #181818;
`
export const Main = styled.main`
	-webkit-box-flex: 1;
	-ms-flex: 1 1 auto;
	flex: 1 1 auto;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
`
export const MainCenterBlock = styled.div`
	width: auto;
	-webkit-box-flex: 3;
	-ms-flex-positive: 3;
	flex-grow: 3;
	padding: 20px 40px 20px 111px;
`
