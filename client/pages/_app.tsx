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
import getTheme from '../theme/getTheme'

function MyApp({ Component, pageProps }: AppProps) {
    const [mode, setMode] = useState<PaletteMode>('light')

    useEffect(() => {
        setMode((localStorage.getItem('mode') as PaletteMode) || 'light')
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
        () => createTheme(getTheme(mode) as ThemeOptions),
        [mode]
    )
    return (
        <Box>
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
        </Box>
    )
}

export default MyApp
