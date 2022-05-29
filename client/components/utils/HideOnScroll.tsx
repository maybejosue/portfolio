import { ReactElement } from 'react'
import { useScrollTrigger, Slide } from '@mui/material'

interface Props {
    children: ReactElement
}

export default function HideOnScroll({ children }: Props) {
    const trigger = useScrollTrigger()
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}
