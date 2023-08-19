import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette:{
    mode: 'dark',

    primary:{
      main: "#FAFAFA",
      whole: "#fff",
      light: "#fff",
    },
    secondary:{
      main: '#15c630',
    },
    otherColor:{
      main:"#999"
    }
  },

  typography: {
    fontFamily:[
      'Noto Sans JP',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      "Helvetica Neue",
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ]
  },

})