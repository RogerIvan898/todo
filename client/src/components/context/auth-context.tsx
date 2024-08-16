'use client'

import React, {createContext, FC, ReactNode, useState} from 'react';

interface IAuthContext{
  userId: string | null
  login: (userId: string) => void
  logout: () => void
}

const AuthContext = createContext<IAuthContext | null>(null)

const AuthProvider: FC<ReactNode> = ({children}) => {
  const [userId, setUserId] = useState<string | null>(null)

  const login = (userId: string) => {
    setUserId(userId)
  }

  const logout = () => {
    setUserId(null)
  }

  return (
    <AuthContext.Provider value={{userId, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider }