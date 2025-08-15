import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StatusCodes } from "http-status-codes";

export const AuthContext = createContext({});

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api/users",
  withCredentials: true,
});

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const router = useNavigate();

  const handleRegister = async (name, username, password) => {
    try {
      const request = await client.post("/register", {
        name,
        username,
        password,
      });
      if (request.status === StatusCodes.CREATED) {
        return request.data.message;
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || "Registration failed");
    }
  };

  const handleLogin = async (username, password) => {
    try {
      const request = await client.post("/login", { username, password });
      if (request.status === StatusCodes.OK) {
        localStorage.setItem("token", request.data.token);
        setUserData(request.data.user);
        router("/");
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <AuthContext.Provider value={{ userData, setUserData, handleRegister, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
