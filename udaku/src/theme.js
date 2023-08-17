import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette:{
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
      "Noto Color Emoji"
    ]
  },

})