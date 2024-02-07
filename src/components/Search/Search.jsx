import { useDispatch } from 'react-redux'
import { handlerSearchTrack } from '../../redux/store/playerSlice.js'
import * as S from './Search.styles.js'

import { ReactComponent as SvgSearch } from './../../assets/images/icon/search.svg'

export const Search = ({ searchQuery, setSearchQuery }) => {
	const dispatch = useDispatch()

	dispatch(handlerSearchTrack(searchQuery))

	return (
		<S.CentreBlockSearch>
			<SvgSearch />
			<S.SearchText
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				type='search'
				placeholder='Поиск'
				name='search'
			/>
		</S.CentreBlockSearch>
	)
}
