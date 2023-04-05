import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5B72F2',
      main: '#5B72F2',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#FE7359',
      main: '#FE7359',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: "Font_Medium, sans-serif",
  },
});