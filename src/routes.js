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
				path='/skypro-music/login'
				element={<LoginPage isLoginMode={true}></LoginPage>}
			></Route>

			<Route
				path='/skypro-music/register'
				element={<LoginPage isLoginMode={false}></LoginPage>}
			></Route>

			<Route element={<ProtectedRoute />}>
				<Route element={<PageLayout />}>
					<Route path='/skypro-music/' element={<MainPage />} />

					<Route path='/skypro-music/favorites' element={<FavoritesPage />} />

					<Route
						path='/skypro-music/category/:id'
						element={<CategoriesPage />}
					/>
				</Route>
			</Route>

			<Route path='*' element={<ErrorPage />}></Route>
		</Routes>
	)
}
