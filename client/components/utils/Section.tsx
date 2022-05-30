import { ReactNode } from 'react'
import { Paper, Box } from '@mui/material'

type Props = {
    name: string
    children: ReactNode
}

const Section = ({ children, name }: Props) => {
    return (
        <Box component="section" id={name}>
            {children}
        </Box>
    )
}

export default Section
