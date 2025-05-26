import {createTheme} from '@mui/material/styles'

declare module '@mui/system' {
  interface BreakpointOverrides {
    laptop: true;
    tablet: true;
    mobile: true;
    desktop: true;
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      laptop: 1024,
      tablet: 640,
      mobile: 0,
      desktop: 1280,
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif', // デフォルト全体にInter
    h1: {
      fontFamily: '"Kaushan Script", cursive', // タイトルなどにKaushan
    },
    h2: {
      fontFamily: '"Kaushan Script", cursive',
    },
  },
});

export default theme;
