'use client'

import { ThemeProvider, ScopedCssBaseline } from '@mui/material';
import theme from '@/utils/theme'; // あなたの theme ファイルへのパス
import { AuthProvider } from '@/context/AuthContext';
import { PostProvider } from '@/context/PostContext';
import {AuthInitializer} from '@/app/components/wrapper/useAuthProvider';
import Header from '@/app/components/common/header'
import Footer from '@/app/components/common/footer'
import { RecoilProvider } from './components/wrapper/recoilProvider';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <PostProvider>
        <ThemeProvider theme={theme}>
          <ScopedCssBaseline>
            <AuthInitializer>
              <RecoilProvider>
                <Header />
                  {children}
                <Footer />
              </RecoilProvider>
            </AuthInitializer>
          </ScopedCssBaseline>
        </ThemeProvider>
      </PostProvider>
    </AuthProvider>
  );
}
