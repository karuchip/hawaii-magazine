"use client"

import { AuthProvider } from "@/context/AuthContext";
import { PostProvider } from "@/context/PostContext";
import { ScopedCssBaseline, ThemeProvider } from "@mui/material";
import { AuthInitializer } from "./useAuthProvider";
import theme from "@/utils/theme";
import Header from "../common/header";
import Footer from "../common/footer";
// jotai
import { Provider as JotaiProvider} from 'jotai'

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <JotaiProvider>
      <AuthProvider>
        <PostProvider>
          <ThemeProvider theme={theme}>
            <ScopedCssBaseline>
              <AuthInitializer>
                <Header />
                  {children}
                <Footer />
              </AuthInitializer>
            </ScopedCssBaseline>
          </ThemeProvider>
        </PostProvider>
      </AuthProvider>
    </JotaiProvider>
  );
}
