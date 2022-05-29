import { ReactNode } from 'react'
import { Paper } from '@mui/material'

type Props = {
    sectionName: string
    children: ReactNode
}

export default function Section({ children, sectionName }: Props) {
    return (
        <section id={sectionName}>
            <Paper
                elevation={0}
                sx={{
                    p: '1rem',
                    mb: '1rem',
                }}
            >
                {children}
            </Paper>
        </section>
    )
}
