// AppContext.tsx
import React, { createContext, ReactNode, useContext } from "react";

const AppContext = createContext(undefined);

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [token, setToken] = React.useState("");
  const contextValue = {
    isLoading,
    setIsLoading,
    token,
    setToken,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};

export default AppProvider;
