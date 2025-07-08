// 写経
import {render, screen, fireEvent} from "@testing-library/react"
import UserIcon from "@/app/components/userIcon"
import { useAuthContext } from "@/context/AuthContext"
import { useRouter } from "next/router"

// router.pushをモックする
jest.mock('next/navigation', ()=> ({
  useRouter: () => ({
    push: jest.fn()
  })
}))

// useAuthContextをモックする
jest.mock('../app/context/AuthContext', () => ({
  useAuthContext: jest.fn()
}))

// describeはテストグループ
describe('UserIcon コンポーネント', () => {
  it('loginUserIcon がある場合に画像が表示される', () => {
    (useAuthContext as jest.Mock).mockReturnValue({
      loginUserId: '123',
      loginUserIcon: "/images/testIcon.JPG"
    })
    render(<UserIcon/>)
    const img = screen.getByAltText('アイコン')
    expect(img).toHaveAttribute('src', '/images/testIcon.JPG')
  })

  it('loginUserIcon がない場合はデフォルト画像が表示される', () => {
    (useAuthContext as jest.Mock).mockReturnValue({
      loginUserId: '123',
      loginUserIcon: null,
    })
    render(<UserIcon />)
    const img = screen.getByAltText('アイコン')
    expect(img).toHaveAttribute('src', '.images.defaultIcon.JPG')
  })

  it('ログインユーザーがいるときにクリックでページ遷移する', () => {
    const mockPush= jest.fn() as jest.Mock
    (useRouter as jest.Mock).mockReturnValue({push: mockPush})
    (useAuthContext as jest.Mock).mockReturnValue({
      loginUserId: '456',
      loginUserIcon: '/images/testIcon.jpg',
    })
    render(<UserIcon />)
    const img = screen.getByAltText('アイコン')
    fireEvent.click(img)
    expect(mockPush).toHaveBeenCalledWith('/readmypage/456')
  })

  it('ログインユーザーがいない時に alert を表示する', () => {
    const alertSpy = jest
      .spyOn(window, 'alert')
      .mockImplementation(() => {}) as jest.SpyInstance<void, [message?: any]>

    (useAuthContext as jest.Mock).mockReturnValue({
      loginUserId: null,
      loginUserIcon: null,
    })

    render(<UserIcon />)
    const img = screen.getByAltText('アイコン')
    fireEvent.click(img)

    expect(alertSpy).toHaveBeenCalledWith('ログイン情報が取得できませんでした')
    alertSpy.mockRestore()
  })
})
