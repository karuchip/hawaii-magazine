"use client"

import { useAuthContext } from "@/context/AuthContext";
import { notificationListState, notificationLoadedState } from "@/recoil/notificationAtom";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil"

export const useFetchNotification = () => {
  const setNotifications = useSetRecoilState(notificationListState);
  const setLoaded = useSetRecoilState(notificationLoadedState)
  const notifications = useRecoilValue(notificationListState);
  const {loginUserId} = useAuthContext()

  useEffect(() => {
    console.log("通知が更新されました", notifications); // 👈 ここで変化が追える
  }, [notifications]);

  useEffect(() => {
    if(!loginUserId) return;
    const fetchNotifications = async () => {
      try {
        console.log(`/api/notification/read/${loginUserId}`)
        const res = await fetch(`/api/notification/read/${loginUserId}`);
        if (!res.ok) throw new Error("Failed to fetch notifications");

        const data = await res.json();
        console.log(data)
        console.log(data.notificationResult)
        setNotifications(data.notificationResult);
        // ロード完了
        setLoaded(true);
      }catch (error) {
        console.log("通知取得に失敗しました", error);
        // ロード完了
        setLoaded(true);
      }
    }
    fetchNotifications();
  }, [loginUserId])
}
