import { styled } from 'styled-components'

export const Controls = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
	padding: 0 27px 0 31px;
`
export const CommonBtn = styled.div`
	cursor: pointer;

	padding: 5px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
`
export const BtnPrev = styled(CommonBtn)`
	margin-right: 23px;
	&:hover {
		fill: #696969;
		stroke: #ffffff;
		cursor: pointer;
	}
	&:active svg {
		fill: transparent;
		stroke: #ffffff;
		cursor: pointer;
	}
`
export const BtnPlay = styled(CommonBtn)`
	margin-right: 23px;
`
export const BtnNext = styled(CommonBtn)`
	margin-right: 28px;
	fill: #a53939;
`
export const BtnRepeat = styled(CommonBtn)`
	margin-right: 24px;
	&:hover svg {
		fill: #696969;
		stroke: #acacac;
		cursor: pointer;
	}
	&:active svg {
		fill: transparent;
		stroke: #ffffff;
		cursor: pointer;
	}
`
export const BtnShuffle = styled(CommonBtn)`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;

	&:hover svg {
		fill: #696969;
		stroke: #acacac;
		cursor: pointer;
	}
	&:active svg {
		fill: transparent;
		stroke: #ffffff;
		cursor: pointer;
	}
`
export const BtnPrevSvg = styled.div`
	width: 15px;
	height: 14px;
`
export const BtnPlaySvg = styled.div`
	width: 22px;
	height: 20px;
	fill: #d9d9d9;
`
export const BtnNextSvg = styled.div`
	width: 15px;
	height: 14px;
	fill: inherit;
	stroke: #d9d9d9;
`
