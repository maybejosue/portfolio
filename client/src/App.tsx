import { useState } from 'react'
import { createTheme, ThemeProvider, ThemeOptions } from '@mui/material'
import { Home, Resume } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/helpers/Layout'

const getDesignTokens = (mode: string) => ({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 800,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                  // palette values for light mode
                  primary: {
                      main: '#061834',
                  },
                  secondary: {
                      main: '#0046FF',
                  },
                  background: {
                      default: '#F4F5FC',
                  },
              }
            : {
                  // palette values for dark mode
                  mode: 'dark',
                  primary: {
                      main: '#E6E5E8',
                  },
                  secondary: {
                      main: '#0046FF',
                  },
                  background: {
                      paper: '#1E293D',
                      default: '#141221',
                  },
              }),
    },
    components: {
        MuiTimelineItem: {
            styleOverrides: {
                root: {
                    ':before': {
                        content: 'none',
                    },
                },
            },
        },
    },
})

export default function App() {
    const [mode, setMode] = useState(
        localStorage.getItem('mode') === 'dark' ? 'dark' : 'light'
    )

    const theme = createTheme(getDesignTokens(mode) as ThemeOptions)

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route
                        path="/"
                        element={<Layout mode={mode} setMode={setMode} />}
                    >
                        <Route index element={<Home />} />
                    </Route>
                    <Route path="resume" element={<Resume />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    )
}
