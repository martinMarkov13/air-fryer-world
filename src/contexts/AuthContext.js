import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

import * as authService from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("auth", {});
  const navigate = useNavigate();

  const onLoginSubmit = async (authData) => {
    try {
      const result = await authService.login(authData);
      setAuth(result);
      navigate("/recipes");
    } catch (error) {
      console.log("There is a problem");
    }
  };

  const onRegisterSubmit = async (values) => {
    const { confirmPassword, ...registerData } = values;
    if (confirmPassword !== registerData.password) {
      return;
    }
    try {
      const result = await authService.register(registerData);
      setAuth(result);
      navigate("/recipes");
    } catch (error) {
      console.log(`There is a problem !`);
    }
  };

  const onLogoutClick = async () => {
    await authService.logout();
    setAuth({});
  };
 
  const contextValues = {
    onLoginSubmit,
    onLogoutClick,
    onRegisterSubmit,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};
