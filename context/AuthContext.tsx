"use client"
import {createContext, useState, useContext, ReactNode} from "react"

//型定義
type AuthContextType = {
  loginUserId: string | null,
  setLoginUserId: (id: string | null) => void,
  loginUserEmail: string | null,
  setLoginUserEmail: (email: string | null) => void,
  loginUserName: string | null,
  setLoginUserName: (name: string | null) => void,
  loginUserIcon: string | null,
  setLoginUserIcon: (userIcon: string | null) => void,
  loading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  isLoggedIn: boolean,
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

//初期値（ここでは仮の関数を入れる）
const AuthContext = createContext<AuthContextType> ({
  loginUserId: null,
  setLoginUserId: () => {},
  loginUserName: null,
  setLoginUserName: () => {},
  loginUserEmail: null,
  setLoginUserEmail: () => {},
  loginUserIcon: null,
  setLoginUserIcon: () => {},
  loading: true,
  setLoading: () => {},
  isLoggedIn: true,
  setIsLoggedIn: () => {}
})


//Providerの定義
export const AuthProvider = ({children}:{children: ReactNode}) => {
  const [loginUserId, setLoginUserId] = useState<string | null>(null)
  const [loginUserName, setLoginUserName] = useState<string | null>(null)
  const [loginUserEmail, setLoginUserEmail] = useState<string | null>(null)
  const [loginUserIcon, setLoginUserIcon] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true)

  return (
    <AuthContext.Provider value={{
      loginUserId,
      setLoginUserId,
      loginUserName,
      setLoginUserName,
      loginUserEmail,
      setLoginUserEmail,
      loginUserIcon,
      setLoginUserIcon,
      loading,
      setLoading,
      isLoggedIn,
      setIsLoggedIn }}>

      {children}

    </AuthContext.Provider>
  )
}

//呼び出しようのカスタムフック
export const useAuthContext = () => useContext(AuthContext)
