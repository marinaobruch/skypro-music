import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
	usePostLoginMutation,
	usePostRegMutation,
	usePostTokenMutation,
} from '../../redux/services/playlists'
import { setAccessToken, setRefreshToken } from '../../redux/store/tokenSlice'
import { userLogin } from '../../redux/store/userSlice'
import * as S from './LoginPage.styles'

export const LoginPage = ({ isLoginMode = false }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const [textError, setTextError] = useState(null)

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const [postToken, {}] = usePostTokenMutation()
	const [postLogin, {}] = usePostLoginMutation()
	const [postReg, {}] = usePostRegMutation()

	useEffect(() => {
		setTextError(null)
	}, [isLoginMode, email, password, repeatPassword])

	const handleLogin = async () => {
		await postToken({ email, password })
			.unwrap()
			.then((token) => {
				postLogin({ email, password })
					.unwrap()
					.then((response) => {
						dispatch(
							userLogin({
								email: response.email,
								username: response.username,
								id: response.id,
							}),
						)
						dispatch(
							setAccessToken({
								token: token.access,
							}),
						)
						dispatch(
							setRefreshToken({
								refreshToken: token.refresh,
							}),
						)
						localStorage.setItem('token', token.access)
						localStorage.setItem('refreshToken', token.refresh)

						if (response.email) {
							navigate('/')
						}
					})
					.catch((error) => {
						console.log(error)
					})
			})
			.catch((error) => {
				console.log(error)
				if (error.status === 401) {
					setTextError(
						'Не найдено активной учетной записи с указанными данными',
					)
				} else setTextError('Ошибка сервера, попробуйте позже')
			})
	}

	const handleAuth = async (e) => {
		e.preventDefault()
		if (!email) {
			setTextError('Введите логин')
			return
		}
		if (!password) {
			setTextError('Введите пароль')
			return
		}

		handleLogin()
	}

	const handleNewReg = async () => {
		await postReg({
			username: username,
			email: email,
			password: password,
		})
			.unwrap()
			.then((response) => {
				dispatch(
					userLogin({
						email: response.email,
						username: response.username,
						id: response.id,
					}),
				)
				if (response.email) {
					navigate('/login')
				}
			})
			.catch((error) => {
				console.log(error)
				if (error.data.email && error.data.email.length > 0) {
					setTextError(error.data.email)
				}
				if (error.data.password && error.data.password.length > 0) {
					setTextError(error.data.password)
				}
				if (error.data.username && error.data.username.length > 0) {
					setTextError(error.data.username)
				}
			})
	}

	const handleRegister = async () => {
		if (!email) {
			setTextError('Введите почту')
			return
		}
		if (!username) {
			setTextError('Введите логин')
			return
		}
		if (!password) {
			setTextError('Введите пароль')
			return
		}
		if (!repeatPassword) {
			setTextError('Повторите пароль')
			return
		}
		if (password !== repeatPassword) {
			setTextError('Пароли не совпадают')
			return
		}

		handleNewReg()
	}
	return (
		<S.PageContainer>
			<S.ModalForm>
				<Link to={'/login'}>
					<S.LoginModalLogo>
						<S.LoginModalLogoImg src='../img/logo_modal.png' alt='logo' />
					</S.LoginModalLogo>
				</Link>
				{isLoginMode ? (
					<>
						<S.Inputs>
							<S.ModalInput
								type='text'
								name='login'
								placeholder='Почта'
								value={email}
								onChange={(event) => {
									setEmail(event.target.value)
								}}
							/>
							<S.ModalInput
								type='password'
								name='password'
								placeholder='Пароль'
								value={password}
								onChange={(event) => {
									setPassword(event.target.value)
								}}
							/>
						</S.Inputs>
						<S.LoginError>{textError}</S.LoginError>
						<S.Buttons>
							<S.PrimaryButton onClick={handleAuth}>Войти</S.PrimaryButton>
							<Link to='/register'>
								<S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
							</Link>
						</S.Buttons>
					</>
				) : (
					<>
						<S.Inputs>
							<S.ModalInput
								type='text'
								name='login'
								placeholder='Почта'
								value={email}
								onChange={(event) => {
									setEmail(event.target.value)
								}}
							/>
							<S.ModalInput
								type='text'
								name='login'
								placeholder='Логин'
								value={username}
								onChange={(event) => {
									setUsername(event.target.value)
								}}
							/>
							<S.ModalInput
								type='password'
								name='password'
								placeholder='Пароль'
								value={password}
								onChange={(event) => {
									setPassword(event.target.value)
								}}
							/>
							<S.ModalInput
								type='password'
								name='repeat-password'
								placeholder='Повторите пароль'
								value={repeatPassword}
								onChange={(event) => {
									setRepeatPassword(event.target.value)
								}}
							/>
						</S.Inputs>
						<S.LoginError>{textError}</S.LoginError>
						<S.Buttons>
							<S.PrimaryButton onClick={handleRegister}>
								Зарегистрироваться
							</S.PrimaryButton>
						</S.Buttons>
					</>
				)}
			</S.ModalForm>
		</S.PageContainer>
	)
}
