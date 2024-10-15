
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async ({ email, password }) => {
  
    try {
      setUser({ email });
      return true;
    } catch (error) {
      console.error('Signup failed:', error);
      return false;
    }
  };

  const login = async (email, password) => {
   
    try {
      setUser({ email });
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
