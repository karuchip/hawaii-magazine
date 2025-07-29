// AuthInitializer.tsx
"use client"
import useAuth from "@/utils/useAuth"
import { ReactNode } from "react";
import Loading from "../common/loading";

export const AuthInitializer = ({ children }: { children: ReactNode }) => {
  const {loading} = useAuth(false)
  useAuth(false)

  if (loading) {
    return <Loading/>
  }

  return (
    <>
      {children}
    </>
  )
}
