import React, { useState } from 'react'
import {
    KeyboardArrowUp as KeyboardArrowUpIcon,
    KeyboardArrowDown as KeyboardArrowDownIcon,
    OpenInNew as OpenInNewIcon,
    OpenInNewOff as OpenInNewOffIcon,
} from '@mui/icons-material'
import {
    Typography,
    Box,
    IconButton,
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Collapse,
    TableHead,
} from '@mui/material'

interface Achievements {
    title: string
    columns: string[]
    rows: any[]
}

const Dropdown = (achievement: Achievements) => {
    const [open, setOpen] = useState(false)
    const { title, columns, rows } = achievement

    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                    <Typography
                        sx={{
                            textTransform: 'capitalize',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            component="span"
                            sx={{
                                fontSize: 'xxx-large',
                                marginRight: '1rem',
                            }}
                        >
                            {rows.length}{' '}
                        </Box>
                        {title}
                    </Typography>
                </Box>

                {rows.length && (
                    <Box>
                        {open ? (
                            <IconButton
                                onClick={() => setOpen(false)}
                                aria-label="Close dropdown"
                            >
                                <KeyboardArrowUpIcon />
                            </IconButton>
                        ) : (
                            <IconButton
                                onClick={() => setOpen(true)}
                                aria-label="Open dropdown"
                            >
                                <KeyboardArrowDownIcon />
                            </IconButton>
                        )}
                    </Box>
                )}
            </Box>

            <Collapse in={open}>
                <TableContainer>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                {columns.map((columnName, i) => (
                                    <TableCell
                                        key={i}
                                        sx={{ textTransform: 'capitalize' }}
                                    >
                                        {columnName}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((achievement, i) => (
                                <TableRow
                                    key={i}
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        },
                                    }}
                                >
                                    {columns.map((columnName, j) => (
                                        <TableCell key={j}>
                                            {(() => {
                                                if (columnName === 'link') {
                                                    return (
                                                        <IconButton
                                                            size="small"
                                                            href={
                                                                achievement[
                                                                    columnName
                                                                ]
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            aria-label="Open in new tab"
                                                            disabled={
                                                                !achievement[
                                                                    columnName
                                                                ]
                                                            }
                                                        >
                                                            {achievement[
                                                                columnName
                                                            ] ? (
                                                                <OpenInNewIcon fontSize="small" />
                                                            ) : (
                                                                <OpenInNewOffIcon fontSize="small" />
                                                            )}
                                                        </IconButton>
                                                    )
                                                }
                                                return achievement[columnName]
                                            })()}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Collapse>
        </Box>
    )
}

export default Dropdown
