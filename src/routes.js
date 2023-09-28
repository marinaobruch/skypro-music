import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { CategoriesPage } from "./pages/categories/CategoriesPage";
import { FavoritesPage } from "./pages/favorites/FavoritesPage";
import { ErrorPage } from "./pages/error/ErrorPage";
import { LoginPage } from "./pages/login/LoginPage";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

export const AppRoutes = ({ loading, allTracks, getAllTracksError }) => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage isLoginMode={true}></LoginPage>}
      ></Route>
      <Route
        path="/register"
        element={<LoginPage isLoginMode={false}></LoginPage>}
      ></Route>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainPage
              loading={loading}
              allTracks={allTracks}
              getAllTracksError={getAllTracksError}
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
