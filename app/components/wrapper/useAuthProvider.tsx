"use client"

import { ReactNode } from "react"
import useAuth from "../../../utils/useAuth"

export const AuthInitializer = ({children}:{children:ReactNode}) => {
  useAuth(false)

  return (
    <>
      {children}
    </>
  )
}
