import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext(null);

const STORAGE_KEY = 'agh_auth_user';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setUser(JSON.parse(stored));
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
    setLoading(false);
  }, []);

  const login = useCallback(async ({ email, password }) => {
    await new Promise((r) => setTimeout(r, 900));
    const stored = localStorage.getItem(`agh_user_${email}`);
    if (!stored) throw new Error('No account found with that email address.');
    const account = JSON.parse(stored);
    if (account.password !== btoa(password)) throw new Error('Incorrect password. Please try again.');
    const sessionUser = { id: account.id, name: account.name, email: account.email, phone: account.phone, avatar: account.avatar };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessionUser));
    setUser(sessionUser);
    return sessionUser;
  }, []);

  const register = useCallback(async ({ name, email, phone, password }) => {
    await new Promise((r) => setTimeout(r, 1000));
    if (localStorage.getItem(`agh_user_${email}`)) throw new Error('An account with this email already exists.');
    const newUser = { id: Date.now().toString(), name, email, phone, password: btoa(password), avatar: null, createdAt: new Date().toISOString() };
    localStorage.setItem(`agh_user_${email}`, JSON.stringify(newUser));
    const sessionUser = { id: newUser.id, name, email, phone, avatar: null };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessionUser));
    setUser(sessionUser);
    return sessionUser;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }, []);

  const forgotPassword = useCallback(async ({ email }) => {
    await new Promise((r) => setTimeout(r, 800));
    const stored = localStorage.getItem(`agh_user_${email}`);
    if (!stored) throw new Error('No account found with that email address.');
    return true;
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, forgotPassword, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
