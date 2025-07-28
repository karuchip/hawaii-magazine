import {render, screen, waitFor} from '@testing-library/react'
import Notification from '@/app/components/notification/notification'
import { useAuthContext } from '@/context/AuthContext';
import '@testing-library/jest-dom'

const mockNotifications = [
  {
    id: 1,
    type: 'like',
    hasConfirmed: false,
    createdAt: new Date('2025-07-27T10:00:00Z'),
    post: {
      id: '1',
      title: 'ハワイ旅行の思い出',
      image1: '/test/test1.JPG',
    },
    sender: {
      id: 2,
      name: '太郎',
    },
  },
];

// next/navigationをモック
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    refresh: jest.fn(),
    back: jest.fn(),
  })
}))

// AuthContextをモック
jest.mock('@/context/AuthContext', () => ({
  useAuthContext: jest.fn(),
}))

// fetchをモック
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        notificationResult: mockNotifications,
      })
  })
) as jest.Mock;

describe('Notification コンポーネント', () => {
  afterEach(() => {
    jest.clearAllMocks();
  })

  it('ログインしている場合、通知文言が表示される', async() => {
    (useAuthContext as jest.Mock).mockReturnValue({
      loginUserId: 123,
    });

    render(<Notification />);

    // 通知文言が表示されるか確認
    await waitFor(() => {
      expect(
        screen.getByText((content, element) =>
          content.includes("太郎") &&
          content.includes("ハワイ旅行の思い出") &&
          content.includes("mahalo!!")
        )
      ).toBeInTheDocument();
    });
  });

  it('ログインしていない場合、何も表示されない', async() => {
    (useAuthContext as jest.Mock).mockReturnValue({
      loginUserId: null,
    });

    const {container} = render(<Notification />);

    await waitFor(() => {
      expect(container).toBeEmptyDOMElement();
    })
  })
})
