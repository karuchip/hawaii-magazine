export type NotificationType = {
  id: number;
  type: 'comment' | 'like';
  hasConfirmed: boolean;
  createdAt: Date;
  post : {
    id: number;
    title: string;
    image1: string;
  };
  sender: {
    id: number;
    name: string;
  }
}
