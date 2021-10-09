import { darkScrollbar, ThemeOptions } from "@mui/material";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#0a1929',
      contrastText: "#66b2ff"
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#0a1929',
      paper: '#001e3c',
    },
    text: {
      primary: '#f3f6f9',
    },
  },
  typography: {
    fontFamily: 'Nunito',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
      },
    },
  }
};