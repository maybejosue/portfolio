import { ReactNode } from 'react'
import { Paper } from '@mui/material'

type Props = {
    children: ReactNode
}

const Widget = ({ children }: Props) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: '1rem',
                mb: '1rem',
            }}
        >
            {children}
        </Paper>
    )
}

export default Widget
