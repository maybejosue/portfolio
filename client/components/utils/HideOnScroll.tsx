import { ReactElement } from 'react'
import { useScrollTrigger, Slide } from '@mui/material'

interface Props {
    children: ReactElement
}

const HideOnScroll = ({ children }: Props) => {
    const trigger = useScrollTrigger()
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}

export default HideOnScroll
