import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userLogout } from '../../../redux/store/userSlice.js'
import * as S from './SideBarPersonal.styles.js'

export const SideBarPersonal = ({ loading }) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const currentUser = useSelector((state) => state.user.username)

	const logout = () => {
		dispatch(userLogout())
		navigate('/skypro-music/login')
	}

	return (
		<S.SidebarPersonal>
			{loading ? (
				<S.SidebarPersonalName>Loading</S.SidebarPersonalName>
			) : (
				<S.SidebarPersonalName>{currentUser}</S.SidebarPersonalName>
			)}
			<S.SidebarIcon onClick={logout}>
				<svg alt='logout'>
					<use xlinkHref='img/icon/sprite.svg#logout'></use>
				</svg>
			</S.SidebarIcon>
		</S.SidebarPersonal>
	)
}
