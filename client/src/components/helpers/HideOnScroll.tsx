import { useScrollTrigger, Slide } from '@mui/material'
import { Children } from '../shared/interfaces/commonTypes.interface'

export default function HideOnScroll({ children }: Children) {
    const trigger = useScrollTrigger()
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}
