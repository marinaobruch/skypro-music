import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { CategoriesPage } from "./pages/categories/CategoriesPage";
import { FavoritesPage } from "./pages/favorites/FavoritesPage";
import { ErrorPage } from "./pages/error/ErrorPage";
import { LoginPage } from "./pages/login/LoginPage";
import { RegPage } from "./pages/reg/RegPage";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

export const AppRoutes = ({ user, onAuthButtonClick }) => {
  const isUser = Boolean(user);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <LoginPage
            isAllowed={isUser}
            onAuthButtonClick={onAuthButtonClick}
          />
        }
      />
      <Route
        path="/register"
        element={<RegPage />}
      />
      <Route
        path="/"
        element={
          <ProtectedRoute isAllowed={isUser}>
            <MainPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/favorites"
        element={
          <ProtectedRoute isAllowed={isUser}>
            <FavoritesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/category/:id"
        element={
          <ProtectedRoute isAllowed={isUser}>
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
