import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { userLogout } from '../../../redux/store/userSlice.js'
import { NavBarItem } from '../NavBarItem/NavBarItem'
import * as S from './NavBarMenu.styles.js'

export const NavBarMenu = () => {
	const dispatch = useDispatch()

	const logout = () => {
		dispatch(userLogout())
		navigate('/skypro-music/login')
	}

	return (
		<S.NavMenu>
			<S.MenuList>
				<NavLink to='/skypro-music/'>
					<NavBarItem menuName='Главная' />
				</NavLink>
				<NavLink to='/skypro-music/favorites'>
					<NavBarItem menuName='Мой плейлист' />
				</NavLink>
				<NavLink onClick={logout} to='/skypro-music/login'>
					<NavBarItem menuName='Выйти' />
				</NavLink>
			</S.MenuList>
		</S.NavMenu>
	)
}
