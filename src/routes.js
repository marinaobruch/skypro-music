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

      <Route element={<PageLayout />}>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainPage
                loading={loading}
                getAllTracksError={getAllTracksError}
              />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <FavoritesPage />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/category/:id"
          element={
            <ProtectedRoute>
              <CategoriesPage />
            </ProtectedRoute>
          }
        ></Route>
      </Route>

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainPage
              loading={loading}
              getAllTracksError={getAllTracksError}
            />
          </ProtectedRoute>
        }
      ></Route>

      <Route
        path="/favorites"
        element={
          <ProtectedRoute>
            <FavoritesPage />
          </ProtectedRoute>
        }
      ></Route>

      <Route
        path="/category/:id"
        element={
          <ProtectedRoute>
            <CategoriesPage />
          </ProtectedRoute>
        }
      ></Route>

      <Route
        path="*"
        element={<ErrorPage />}
      ></Route>
    </Routes>
  );
};
