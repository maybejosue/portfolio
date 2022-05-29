import { PaletteMode } from '@mui/material'

const getTheme = (mode: PaletteMode) => ({
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

export default getTheme
