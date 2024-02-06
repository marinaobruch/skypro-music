import React, { useState } from 'react'
import * as S from './NavBar.styles.js'
import { NavBarMenu } from './NavBarMenu/NavBarMenu.jsx'

export const NavBar = () => {
	const [open, setOpen] = useState(false)
	function toggleOpen() {
		setOpen(!open)
	}

	return (
		<S.MainNav>
			<S.Logo>
				<S.LogoImg src='img/logo.png' alt='logo' />
			</S.Logo>

			<S.Burger onClick={toggleOpen}>
				<S.BurgerLine></S.BurgerLine>
				<S.BurgerLine></S.BurgerLine>
				<S.BurgerLine></S.BurgerLine>
			</S.Burger>

			{open ? <NavBarMenu /> : null}
		</S.MainNav>
	)
}
