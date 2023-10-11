import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../WithAuth";

export const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const { auth } = useAuth();
  if (!auth) {
    return (
      <Navigate
        to={redirectPath}
        replace={true}
      />
    );
  }

  return <Outlet />;
};
