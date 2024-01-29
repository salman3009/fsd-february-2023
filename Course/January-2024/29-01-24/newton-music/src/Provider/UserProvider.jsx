import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signInContext = (userData) => {
    setUser(userData);
    console.log(userData);
  };

  const signUpContext = (userData) => {
    setUser(userData);
    console.log(userData);
  };

  const signOutContext = () => {
    setUser(null);
  };

  let isUserLoggedIn = user;

  const value = {
    user,
    signInContext,
    signOutContext,
    signUpContext,
    isUserLoggedIn,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export function useUser() {
  return useContext(UserContext);
}
