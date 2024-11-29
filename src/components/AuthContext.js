import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password, userType) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { username, password, userType });
      const { user, token } = response.data;
      setUser(user);
      localStorage.setItem('token', token);
      return true;
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

  const signup = async (username, password, userType) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', { username, password, userType });
      const { user, token } = response.data;
      setUser(user);
      localStorage.setItem('token', token);
      return true;
    } catch (error) {
      console.error('Signup error:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
