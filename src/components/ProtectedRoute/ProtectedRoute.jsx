import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, redirectPath = "/login", user }) => {
  console.log(user);
  if (!user) {
    return (
      <Navigate
        to={redirectPath}
        replace={true}
      />
    );
  }

  return children;
};
