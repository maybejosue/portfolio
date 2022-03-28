import { SetStateAction } from 'react'
import { Box, Fab } from '@mui/material'
import { Outlet } from 'react-router'
import Navbar from '../navbar/Navbar'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

interface Props {
    mode: string
    setMode: React.Dispatch<SetStateAction<string>>
}

export default function Layout({ mode, setMode }: Props) {
    const updateMode = () => {
        setMode((prevMode) => {
            if (prevMode === 'dark') {
                localStorage.removeItem('mode')
                return 'light'
            }
            localStorage.setItem('mode', 'dark')
            return 'dark'
        })
    }

    return (
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
                <Outlet />
            </Box>
            <Fab
                size="medium"
                onClick={updateMode}
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
    )
}
