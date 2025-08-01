
import "../app/globals.css"
import { ReactNode } from "react"
import '@fontsource/kaushan-script';
import '@fontsource/playfair';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import Script from "next/script";
import ClientProviders from "./components/wrapper/clientProvider"


const RootLayout = ({children}:{children:ReactNode}) => {

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <Script
              src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`}
              strategy="beforeInteractive"
              />
      </head>
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}

export default RootLayout
