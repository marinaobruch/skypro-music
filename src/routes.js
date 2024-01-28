import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { PageLayout } from './pages/PageLayout/PageLayout'
import { CategoriesPage } from './pages/categories/CategoriesPage'
import { ErrorPage } from './pages/error/ErrorPage'
import { FavoritesPage } from './pages/favorites/FavoritesPage'
import { LoginPage } from './pages/login/LoginPage'
import { MainPage } from './pages/main/MainPage'

export const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path='/login'
				element={<LoginPage isLoginMode={true}></LoginPage>}
			></Route>

			<Route
				path='/register'
				element={<LoginPage isLoginMode={false}></LoginPage>}
			></Route>

			<Route element={<ProtectedRoute />}>
				<Route element={<PageLayout />}>
					<Route path='/' element={<MainPage />} />

					<Route path='/favorites' element={<FavoritesPage />} />

					<Route path='/category/:id' element={<CategoriesPage />} />
				</Route>
			</Route>

			<Route path='*' element={<ErrorPage />}></Route>
		</Routes>
	)
}
