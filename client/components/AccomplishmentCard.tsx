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

interface Language {
    language: string
    level: string
}

interface Certification {
    issuer: string
    title: string
    link: string
    year: string
}

interface Achievement {
    title: string
    link: string
    year: string
}

interface Accompishments {
    title: string
    categories: string[]
    data: any[]
}

const AccomplishmentCard = (accomplishment: Accompishments) => {
    const [open, setOpen] = useState(false)
    const { title, categories, data } = accomplishment

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
                            {data.length}{' '}
                        </Box>
                        {title}
                    </Typography>
                </Box>

                {data.length && (
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
                                {categories.map((category, i) => (
                                    <TableCell
                                        key={i}
                                        sx={{ textTransform: 'capitalize' }}
                                    >
                                        {category}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((achievement, i) => (
                                <TableRow
                                    key={i}
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        },
                                    }}
                                >
                                    {categories.map((category, j) => (
                                        <TableCell key={j}>
                                            {(() => {
                                                if (category === 'link') {
                                                    return (
                                                        <IconButton
                                                            size="small"
                                                            href={
                                                                achievement[
                                                                    category
                                                                ]
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            aria-label="Open in new tab"
                                                            disabled={
                                                                !achievement[
                                                                    category
                                                                ]
                                                            }
                                                        >
                                                            {achievement[
                                                                category
                                                            ] ? (
                                                                <OpenInNewIcon fontSize="small" />
                                                            ) : (
                                                                <OpenInNewOffIcon fontSize="small" />
                                                            )}
                                                        </IconButton>
                                                    )
                                                }
                                                return achievement[category]
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

export default AccomplishmentCard
