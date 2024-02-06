import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ redirectPath = '/skypro-music/login' }) => {
	const currentUser = localStorage.getItem('auth')
	if (!currentUser) {
		return <Navigate to={redirectPath} replace={true} />
	}

	return <Outlet />
}
