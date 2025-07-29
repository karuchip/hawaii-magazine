"use client"

import { AuthProvider } from "@/context/AuthContext";
import { PostProvider } from "@/context/PostContext";
import { ScopedCssBaseline, ThemeProvider } from "@mui/material";
import { AuthInitializer } from "./useAuthProvider";
import theme from "@/utils/theme";
import Header from "../common/header";
import Footer from "../common/footer";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
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
  );
}
