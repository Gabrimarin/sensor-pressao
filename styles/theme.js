import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4f73b5",
    },
    secondary: {
      main: "#6e6484",
    },
    background: {
      paper: "#f2f2ec",
      default: '#304250'
    },
    text: {
      primary: '#304250',
    }
  },
  typography: {
    fontFamily: 'Ubuntu',
    fontSize: 17,
    h1: {
      color: '#284171'
    }, 
    h2: {
      color: '#284171'
    },
  }
});

export default theme;
