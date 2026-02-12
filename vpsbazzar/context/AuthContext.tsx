
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthState } from '../types';
import { authService } from '../services/authService';
import { navigate } from '../App';

interface AuthContextType extends AuthState {
  login: (email: string, pass: string) => Promise<void>;
  register: (fName: string, lName: string, email: string, pass: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null
  });

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setState(prev => ({ ...prev, user, isAuthenticated: true, isLoading: false }));
    } else {
      setState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = async (email: string, pass: string) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    try {
      const user = await authService.login(email, pass);
      setState({ user, isAuthenticated: true, isLoading: false, error: null });
      navigate('#/dashboard');
    } catch (err: any) {
      setState(prev => ({ ...prev, isLoading: false, error: err.message }));
      throw err;
    }
  };

  const register = async (fName: string, lName: string, email: string, pass: string) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    try {
      const user = await authService.register(fName, lName, email, pass);
      setState({ user, isAuthenticated: true, isLoading: false, error: null });
      navigate('#/dashboard');
    } catch (err: any) {
      setState(prev => ({ ...prev, isLoading: false, error: err.message }));
      throw err;
    }
  };

  const logout = () => {
    authService.logout();
    setState({ user: null, isAuthenticated: false, isLoading: false, error: null });
    navigate('#/login');
  };

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
