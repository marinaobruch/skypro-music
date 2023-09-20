import React, { useContext } from "react";

export const UserContext = React.createContext({
  userName: null,
  switchUser: () => {},
});

export const useUserContext = () => {
  const userName = useContext(UserContext);
};
