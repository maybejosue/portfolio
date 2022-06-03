import { useState } from 'react'
import { Collapse, Alert, AlertColor } from '@mui/material'
import { Update as UpdateIcon } from '@mui/icons-material'

interface AlertProps {
    message: string
    icon?: React.ReactElement
    severity?: AlertColor
    color?: AlertColor
}

const UpdateMessage = ({ message, color, icon, severity }: AlertProps) => {
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

export default UpdateMessage
