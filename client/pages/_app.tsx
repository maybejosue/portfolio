import { useState, useMemo, useEffect } from 'react'
import type { AppProps } from 'next/app'
import {
    Box,
    Fab,
    createTheme,
    ThemeProvider,
    ThemeOptions,
    CssBaseline,
    PaletteMode,
} from '@mui/material'
import { Navbar } from '../components/'
import {
    DarkMode as DarkModeIcon,
    LightMode as LightModeIcon,
} from '@mui/icons-material'

const getDesignTokens = (mode: PaletteMode) => ({
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

function MyApp({ Component, pageProps }: AppProps) {
    const [mode, setMode] = useState<PaletteMode>('light')

    useEffect(() => {
        setMode((localStorage.getItem('mode') as PaletteMode) || 'dark')
    }, [])

    const updateMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const nextMode = prevMode === 'light' ? 'dark' : 'light'
                    localStorage.setItem('mode', nextMode)
                    return nextMode
                })
            },
        }),
        []
    )

    const theme = useMemo(
        () => createTheme(getDesignTokens(mode) as ThemeOptions),
        [mode]
    )
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        bgcolor: 'background.default',
                        paddingBottom: '8rem',
                    }}
                >
                    <Navbar />
                    <Box
                        sx={{
                            m: '0 auto',
                            maxWidth: '850px',
                        }}
                    >
                        <Component {...pageProps} />
                    </Box>
                    <Fab
                        size="medium"
                        onClick={updateMode.toggleColorMode}
                        aria-label="theme-icon"
                        sx={{
                            position: 'fixed',
                            bottom: 25,
                            right: 25,
                        }}
                    >
                        {mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
                    </Fab>
                </Box>
            </ThemeProvider>
        </>
    )
}

export default MyApp
