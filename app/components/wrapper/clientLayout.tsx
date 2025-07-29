'use client'

import { ThemeProvider, ScopedCssBaseline } from '@mui/material'
import theme from '@/utils/theme'
import { ReactNode, Suspense } from 'react'
import { RecoilProvider } from '@/app/components/wrapper/recoilProvider'
import ClientHeaderWrapper from '@/app/components/wrapper/clientHeaderWrapper'
import Footer from '@/app/components/common/footer'
import { useFetchNotification } from '@/hooks/useFetchNotification'
import NotificationFetcher from '../notification/notificationFetcher'

type Props = {
  children: ReactNode
}

export const ClientLayout = ({ children }: Props) => {
// カスタムフックの呼び出し(通知リスト取得)

  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline>
        <RecoilProvider>
          <NotificationFetcher/>
          <ClientHeaderWrapper />
          {children}
          <Footer />
        </RecoilProvider>
      </ScopedCssBaseline>
    </ThemeProvider>
  )
}
