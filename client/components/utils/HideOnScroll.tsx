import { useScrollTrigger, Slide } from '@mui/material'
import { Children } from '../../interfaces/commonTypes.interface'

export default function HideOnScroll({ children }: Children) {
    const trigger = useScrollTrigger()
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}
