import React from 'react'
import * as S from './SideBar.styles.js'
import { SideBarBlock } from './SideBarBlock/SideBarBlock'
import { SideBarPersonal } from './SideBarPersonal/SideBarPersonal'

export const SideBar = ({ loading, albums }) => {
	return (
		<S.MainSidebar className='main__sidebar sidebar'>
			{<SideBarPersonal loading={loading} />}
			<SideBarBlock loading={loading} albums={albums} />
		</S.MainSidebar>
	)
}
