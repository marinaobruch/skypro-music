import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { CategoriesPage } from "./pages/categories/CategoriesPage";
import { FavoritesPage } from "./pages/favorites/FavoritesPage";
import { ErrorPage } from "./pages/error/ErrorPage";
import { LoginPage } from "./pages/login/LoginPage";
import { RegPage } from "./pages/reg/RegPage";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

export const AppRoutes = ({
  user,
  setUser,
  onAuthButtonClick,
  tracks,
  setCurrentTrack,
}) => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage onAuthButtonClick={onAuthButtonClick} />}
      />
      <Route
        path="/register"
        element={<RegPage />}
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainPage
              user={user}
              setUser={setUser}
              tracks={tracks}
              setCurrentTrack={setCurrentTrack}
            />
          </ProtectedRoute>
        }
      />
      <Route
        path="/favorites"
        element={
          <ProtectedRoute>
            <FavoritesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/category/:id"
        element={
          <ProtectedRoute>
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
