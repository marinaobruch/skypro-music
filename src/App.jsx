import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GlobalStyle } from './pages/main/MainPage.styles'
import { setAccessToken, setRefreshToken } from './redux/store/tokenSlice'
import { AppRoutes } from './routes'

function App() {
	const dispatch = useDispatch()

	const token = localStorage.getItem('token')
	const refreshToken = localStorage.getItem('refreshToken')

	useEffect(() => {
		if (token) {
			dispatch(setAccessToken({ token }))
			dispatch(setRefreshToken({ refreshToken }))
		}
	})

	return (
		<>
			<GlobalStyle />
			<div className='App'>
				<div>
					<AppRoutes />
				</div>
			</div>
		</>
	)
}

export default App
