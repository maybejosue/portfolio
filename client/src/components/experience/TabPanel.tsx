import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from '@mui/lab'
import { Typography, Box, Avatar, IconButton } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

interface Position {
    positionName: string
    startDate: {
        month: string
        year: string
    }
    endDate: {
        isPresent: boolean
        month: string
        year: string
    }
    location: {
        isRemote: boolean
        city: string
        state: string
    }
    highlights: string[]
}

interface Props {
    avatar: string
    companyName: string
    formerName: string
    positions: Position[]
    link: string
}

export default function TabPanel({
    companyName,
    formerName,
    positions,
    avatar,
    link,
}: Props) {
    return (
        <Box
            role="tabpanel"
            sx={{
                width: { xs: '100%', md: '80%' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    ml: '0.5rem',
                }}
            >
                <Avatar src={avatar} alt={`${companyName} logo`} />

                <Typography
                    variant="h6"
                    sx={{ marginLeft: '1rem', alignItems: 'center' }}
                >
                    {companyName}
                </Typography>

                {formerName && (
                    <Typography
                        component="span"
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            fontStyle: 'italic',
                            fontSize: '1rem',
                        }}
                    >
                        {`(formerly ${formerName})`}
                    </Typography>
                )}

                {link && (
                    <IconButton
                        size="small"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <OpenInNewIcon fontSize="small" />
                    </IconButton>
                )}
            </Box>
            <Timeline>
                {positions.map(
                    (
                        {
                            positionName,
                            location: { isRemote, city, state },
                            startDate: { month: startMonth, year: startYear },
                            endDate: {
                                isPresent,
                                month: endMonth,
                                year: endYear,
                            },
                            highlights,
                        },
                        i,
                        arr
                    ) => (
                        <TimelineItem key={i}>
                            <TimelineSeparator>
                                <TimelineDot color="primary" />
                                {arr.length - 1 !== i && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Box sx={{ mb: '1rem' }}>
                                    <Typography variant="subtitle1">
                                        {positionName}
                                    </Typography>

                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            color: 'text.secondary',
                                        }}
                                    >
                                        {startMonth} {startYear} -{' '}
                                        {isPresent
                                            ? 'Present'
                                            : `${endMonth} ${endYear}`}{' '}
                                        •{' '}
                                        {isRemote
                                            ? 'Remote'
                                            : `${city}, ${state}`}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        mb: '1rem',
                                    }}
                                >
                                    {highlights.map((highlight, i) => (
                                        <Box
                                            key={i}
                                            sx={{
                                                display: 'flex',
                                                mb: '0.5rem',
                                            }}
                                        >
                                            <ArrowForwardIosIcon
                                                fontSize="small"
                                                color="secondary"
                                            />
                                            <Typography>
                                                {' '}
                                                {highlight}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                    )
                )}
            </Timeline>
        </Box>
    )
}
