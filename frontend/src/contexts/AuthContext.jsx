import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleRegister = (userData) => {
    // Example register logic
    console.log("Registering user:", userData);
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, handleRegister }}>
      {children}
    </AuthContext.Provider>
  );
};
