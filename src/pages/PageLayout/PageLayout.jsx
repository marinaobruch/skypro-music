import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../../components/NavBar/NavBar'
import { Search } from '../../components/Search/Search'
import { SideBar } from '../../components/SideBar/SideBar'
import { TrackBar } from '../../components/TrackBar/TrackBar'
import { ALBUMS } from '../../data.js'
import * as S from './PageLayout.styles'

export const PageLayout = ({ loading }) => {
	const currentTrack = useSelector((state) => state.audioplayer.track)
	const [searchQuery, setSearchQuery] = useState()

	return (
		<>
			<S.GlobalStyle />
			<S.Wrapper>
				<S.Container>
					<S.Main>
						<NavBar />
						<S.MainCenterblock>
							<Search
								searchQuery={searchQuery}
								setSearchQuery={setSearchQuery}
							/>
							<Outlet />
						</S.MainCenterblock>
						<SideBar loading={loading} albums={ALBUMS} />
					</S.Main>
					{currentTrack ? <TrackBar /> : null}
				</S.Container>
			</S.Wrapper>
		</>
	)
}
