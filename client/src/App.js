import { createTheme, ThemeProvider } from "@mui/material";
import { Home } from "./components";

const lightTheme = createTheme({
  breakpoints: {
    values: {
      md: 800,
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
  },
  components: {
    MuiTimelineItem: {
      styleOverrides: {
        root: {
          ":before": {
            content: "none",
          },
        },
      },
    },
  },
});

const darkTheme = createTheme({
  breakpoints: {
    values: {
      md: 800,
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
  },
  components: {
    MuiTimelineItem: {
      styleOverrides: {
        root: {
          ":before": {
            content: "none",
          },
        },
      },
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
