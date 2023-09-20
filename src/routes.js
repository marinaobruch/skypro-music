import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { CategoriesPage } from "./pages/categories/CategoriesPage";
import { FavoritesPage } from "./pages/favorites/FavoritesPage";
import { ErrorPage } from "./pages/error/ErrorPage";
import { LoginPage } from "./pages/login/LoginPage";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

export const AppRoutes = ({
  loading,
  user,
  setUser,
  allTracks,
  setCurrentTrack,
  getAllTracksError,
  email,
  setEmail,
  password,
  setPassword,
  repeatPassword,
  setRepeatPassword,
  username,
  setUsername,
}) => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <LoginPage
            isLoginMode={true}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            user={user}
            setUser={setUser}
          ></LoginPage>
        }
      ></Route>
      <Route
        path="/register"
        element={
          <LoginPage
            isLoginMode={false}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            username={username}
            setUsername={setUsername}
            user={user}
            setUser={setUser}
            repeatPassword={repeatPassword}
            setRepeatPassword={setRepeatPassword}
          ></LoginPage>
        }
      ></Route>
      <Route
        path="/"
        element={
          <ProtectedRoute user={user}>
            <MainPage
              loading={loading}
              user={user}
              setUser={setUser}
              allTracks={allTracks}
              setCurrentTrack={setCurrentTrack}
              getAllTracksError={getAllTracksError}
            />
          </ProtectedRoute>
        }
      />
      <Route
        path="/favorites"
        element={
          <ProtectedRoute user={user}>
            <FavoritesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/category/:id"
        element={
          <ProtectedRoute user={user}>
            <CategoriesPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="*"
        element={<ErrorPage />}
      />
    </Routes>
  );
};
