import { createTheme, ThemeProvider } from "@mui/material";
import { Home } from "./components";

const theme = createTheme({
  breakpoints: {
    values: {
      md: 700,
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
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
