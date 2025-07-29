// 通知の型定義
export type Notification = {
  id: number;
  type: 'like' | 'comment';
  hasConfirmed: boolean;
  createdAt: Date;
  sender: {
    name: string;
  };
  post: {
    id: number;
    title: string;
    image1: string;
  };
};
