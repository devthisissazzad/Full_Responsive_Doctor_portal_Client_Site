import React, { createContext, useState } from "react";

export const AuthContext = createContext();
const Context = ({ children }) => {
  const [mode, setMode] = useState(false);
  const authInfo = { mode, setMode };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Context;
