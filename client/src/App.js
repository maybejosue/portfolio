import { createTheme, ThemeProvider } from "@mui/material";
import { Home } from "./components";

const lightTheme = createTheme({
  breakpoints: {
    values: {
      sm: 350,
      md: 800,
      lg: 1200,
      xl: 1500,
    },
  },
  palette: {
    primary: {
      main: "#061834",
    },
    secondary: {
      main: "#0046FF",
    },
    background: {
      default: "#F4F5FC",
    },
    text: {
      secondary: "#939393",
    },
  },
});

const darkTheme = createTheme({
  breakpoints: {
    values: {
      sm: 350,
      md: 800,
      lg: 1200,
      xl: 1500,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#E6E5E8",
    },
    secondary: {
      main: "#0046FF",
    },
    background: {
      paper: "#1E293D",
      default: "#141221",
    },
    text: {
      secondary: "#707486",
    },
  },
});

let theme = lightTheme;
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
