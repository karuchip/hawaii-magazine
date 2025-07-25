"use client"

import "../app/globals.css"
import { ReactNode } from "react"
import Header from "./components/common/header"
import Footer from "./components/common/footer"
import { AuthProvider } from "../context/AuthContext"
import { PostProvider } from "@/context/PostContext"
import useAuth from "@/utils/useAuth"
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline"
import { ThemeProvider } from '@mui/material/styles'
import theme from "@/utils/theme"
import '@fontsource/kaushan-script';
import '@fontsource/playfair';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import Script from "next/script";


const RootLayout = ({children}:{children:ReactNode}) => {
  useAuth(false)

  return (
    <AuthProvider>
      <PostProvider>
        <html lang="en">
          <head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            <Script
                  src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`}
                  strategy="beforeInteractive"
            />
          </head>
          <body>
            <ThemeProvider theme={theme}>
              <ScopedCssBaseline>
                <Header/>
                {children}
                <Footer/>
              </ScopedCssBaseline>
            </ThemeProvider>
          </body>
        </html>
      </PostProvider>
    </AuthProvider>
  )
}

export default RootLayout
