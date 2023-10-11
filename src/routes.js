import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { CategoriesPage } from "./pages/categories/CategoriesPage";
import { FavoritesPage } from "./pages/favorites/FavoritesPage";
import { ErrorPage } from "./pages/error/ErrorPage";
import { LoginPage } from "./pages/login/LoginPage";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { PageLayout } from "./pages/PageLayout/PageLayout";

export const AppRoutes = ({ loading, getAllTracksError }) => {
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

      <Route element={<ProtectedRoute />}>
        <Route element={<PageLayout />}>
          <Route
            path="/"
            element={
              <MainPage
                loading={loading}
                getAllTracksError={getAllTracksError}
              />
            }
          />

          <Route
            path="/favorites"
            element={<FavoritesPage />}
          />

          <Route
            path="/category/:id"
            element={<CategoriesPage />}
          />
        </Route>
      </Route>

      <Route
        path="*"
        element={<ErrorPage />}
      ></Route>
    </Routes>
  );
};
