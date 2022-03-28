import { useState } from 'react'
import { Collapse, Alert } from '@mui/material'
import UpdateIcon from '@mui/icons-material/Update'

type MuiSeverityAndColor = 'info' | 'warning' | 'error' | 'success'

interface AlertProps {
    message: string
    icon?: React.ReactElement
    severity?: MuiSeverityAndColor
    color?: MuiSeverityAndColor
}

export default function UpdateMessage({
    message,
    color,
    icon,
    severity,
}: AlertProps) {
    const [open, setOpen] = useState(true)
    return (
        <Collapse in={open}>
            <Alert
                severity={severity ? severity : 'info'}
                color={color}
                onClose={() => setOpen(false)}
                icon={icon ? icon : <UpdateIcon />}
                sx={{
                    mb: '1rem',
                }}
            >
                {message}
            </Alert>
        </Collapse>
    )
}
