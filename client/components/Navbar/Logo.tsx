import { Typography, Box } from '@mui/material'

const Logo = () => {
    return (
        <Typography
            color="primary"
            variant="subtitle1"
            sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Box
                component="span"
                sx={{
                    fontWeight: '600',
                }}
            >
                Josue
            </Box>
            Rodriguez
        </Typography>
    )
}

export default Logo
