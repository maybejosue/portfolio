import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from '@mui/lab'
import { Typography, Box, Avatar, IconButton } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp'
import { Job } from 'interfaces/commonTypes.interface'
import Image from 'next/image'

const capitalizeFirstLetterOfEachWord = (str: string) => {
    const words = str.split(' ')
    const capitalizedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    })

    return capitalizedWords.join(' ')
}

const TabPanel = ({ company, positions }: Job) => {
    const { logo, name, formerName, site } = company

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
                <Avatar alt={`${name} logo`}>
                    {logo ? (
                        <Image src={logo} layout="fill" />
                    ) : (
                        name[0].toUpperCase()
                    )}
                </Avatar>

                <Typography
                    variant="h6"
                    sx={{
                        marginLeft: '1rem',
                        alignItems: 'center',
                    }}
                >
                    {capitalizeFirstLetterOfEachWord(name)}
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
                        {`(formerly ${capitalizeFirstLetterOfEachWord(
                            formerName
                        )})`}
                    </Typography>
                )}

                {site && (
                    <IconButton
                        size="small"
                        href={site}
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
                            title,
                            location: { isRemote, city, state },
                            startDate: { month: startMonth, year: startYear },
                            endDate: {
                                isPresent,
                                month: endMonth,
                                year: endYear,
                            },
                            contributions,
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
                                        {capitalizeFirstLetterOfEachWord(title)}
                                    </Typography>

                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            color: 'text.secondary',
                                        }}
                                    >
                                        {capitalizeFirstLetterOfEachWord(
                                            startMonth
                                        )}{' '}
                                        {startYear} -{' '}
                                        {isPresent
                                            ? 'Present'
                                            : `${capitalizeFirstLetterOfEachWord(
                                                  endMonth
                                              )} ${endYear}`}{' '}
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
                                    {contributions.map((contribution, i) => (
                                        <Box
                                            key={i}
                                            sx={{
                                                display: 'flex',
                                                mb: '0.5rem',
                                            }}
                                        >
                                            <ArrowRightSharpIcon color="secondary" />
                                            <Typography>
                                                {' '}
                                                {contribution}
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

export default TabPanel
