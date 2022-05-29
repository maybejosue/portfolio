import { Paper } from '@mui/material'

type Props = {
    sectionName: string
    children: React.ReactNode
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
