import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const logout = (
  router: AppRouterInstance,
  setLoginUserId: any,
  setLoginUserName: any,
  setLoginUserEmail: any,
  setLoginUserIcon: any
) => {
  setLoginUserId(null)
  setLoginUserName(null)
  setLoginUserEmail(null)
  setLoginUserIcon(null)

  const token = localStorage.getItem("token")
  if(token) {
    localStorage.removeItem("token")
    alert("ログアウトしました")
    router.replace("/user/login")
  }
}
