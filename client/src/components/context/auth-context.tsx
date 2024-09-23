'use client'

import React, {createContext, FC, ReactNode, useContext, useEffect, useState} from 'react';

const parseJwt = (token: string) => {
  const baseUrl = token.split('.')[1]
  const base = baseUrl.replace(/-/g, '+').replace(/_/, '/')
  const json = atob(base)

  return JSON.parse(json)
}

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

  useEffect(() => {
    if(userId) console.log(parseJwt(document.cookie))
  })

  return (
    <AuthContext.Provider value={{ userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export { AuthContext, AuthProvider, useAuth }
