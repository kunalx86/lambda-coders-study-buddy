import { authService } from "apiServices/auth";
import { createContext, useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext({
  type: null,
  user: null,
  access_token: null,
  isLoading: false,
  login: (creds) => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [type, setType] = useState(null);
  const [user, setUser] = useState(null);
  const [access_token, setAccessToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const login = async (creds) => {
    setIsLoading(true);
    const res = await authService.login(creds);
    getDetails(res.data.access_token);
    history.push(`/${res.data.type}`)
  };

  const logout = async () => {
    setType(null);
    setUser(null);
    setAccessToken(null);
  };

  const getDetails = useCallback((token) => {
    setIsLoading(true);
    authService
      .me()
      .then((res) => {
        setUser(res);
        setType(res.type);
      })
      .finally(() => {
        setIsLoading(false);
        setAccessToken(token);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token !== null) {
      getDetails(token)
    }
  }, [getDetails]);

  return (
    <AuthContext.Provider
      value={{
        type,
        user,
        access_token,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
