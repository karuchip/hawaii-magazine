'use client'
import { ReactNode } from "react"
import {RecoilRoot} from "recoil"

export const RecoilProvider = ({children}:{children:ReactNode}) => {

  console.log("recoilProviderが呼び出されました")

  return <RecoilRoot>{children}</RecoilRoot>
}
