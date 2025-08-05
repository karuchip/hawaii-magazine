import { NotificationType } from "@/app/generated/postgres";
import { notificationAtom, notificationLoadingAtom } from "@/utils/notification/notificationAtom";
import { useSetAtom } from "jotai";
import { Provider as JotaiProvider } from "jotai";
import React from "react";
import {render, screen} from "@testing-library/react"
import Notification from "@/app/components/notification/notification";
import { FetchNotifications } from "@/utils/notification/fetchNotifications";


// fetch
// import fetch from 'node-fetch';
// global.fetch = fetch as unknown as typeof global.fetch;

// Mock router
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

// Mock AuthContext
jest.mock("@/context/AuthContext", () => ({
  useAuthContext: () => ({
    loginUserId: 1,
  }),
}));

// モック用のProvider
const renderWithJotai = (initialNotifications: NotificationType[], loading: boolean) => {
  const Wrapper = ({children}:{children:React.ReactNode}) => {
    const setNotifications = useSetAtom(notificationAtom);
    const setLoading = useSetAtom(notificationLoadingAtom);

    React.useEffect(() => {
      setNotifications(initialNotifications as unknown as import("@/utils/types/notification").NotificationType[]);
      setLoading(loading)
    }, []);

    return <JotaiProvider>{children}</JotaiProvider>
  };

// FetchNotifications関数をモック
  jest.mock('@/utils/notification/fetchNotifications', () => ({
    FetchNotifications: jest.fn(() => Promise.resolve([])),
  }))

  render(<Notification />, {wrapper: Wrapper})
}

// テストケース① ローディング中の表示
test("表示中にLoadingコンポーネントが表示される", () => {
  renderWithJotai([], true);
  expect(screen.getByText("読み込み中...")).toBeInTheDocument();
})

// テストケース② 通知が0件の時
test("通知が0件なら「通知はありません」と表示される", async() => {
  renderWithJotai([], false);
  const message = await screen.findByText("通知はありません")
  expect(message).toBeInTheDocument();
})

// テストケース③ 通知が1件ある場合、内容が表示される
const mockNotification: NotificationType = {
  id: 1,
  sender: { id: 2, name: "たろう" },
  receiverId: 1,
  post: { id: 100, title: "ハワイ旅行", image1: "/sample.jpg" },
  type: "like",
  hasConfirmed: false,
  createdAt: new Date().toISOString(),
};

test("通知が表示され、送信者名・投稿タイトルが含まれている", () => {
  renderWithJotai([mockNotification], false);

  expect(screen.getByText(/たろうさんが/)).toBeInTheDocument();
  expect(screen.getByText(/投稿 「ハワイ旅行」/)).toBeInTheDocument();
  expect(screen.getByText(/mahalo/)).toBeInTheDocument();
});
