import { Section, Widget } from 'components/utils'
import {
    Box,
    Paper,
    Button,
    Typography,
    Avatar,
    Chip,
    Link,
} from '@mui/material'
import { LocationOn as LocationOnIcon } from '@mui/icons-material'
import { aboutMe } from 'data'

const AboutMe = () => {
    const {
        name,
        profession,
        location: { city, state },
        avatar: { src },
        contact: { icon, link, headline, label },
    } = aboutMe

    return (
        <Section name="aboutMe">
            <Widget>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: '2rem' }}>
                    <Paper elevation={8}>
                        <Avatar
                            variant="rounded"
                            src={src}
                            alt={name}
                            sx={{
                                width: { xs: '60px', md: '70px' },
                                height: { xs: '60px', md: '70px' },
                            }}
                        />
                    </Paper>

                    <Box
                        sx={{
                            flexGrow: 1,
                            ml: '1rem',
                        }}
                    >
                        <Typography color="primary"> {name}</Typography>
                        <Typography
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                color: 'text.secondary',
                            }}
                        >
                            <LocationOnIcon sx={{ marginLeft: '-5px' }} />{' '}
                            {city}, {state}
                        </Typography>
                    </Box>

                    <Chip
                        label={profession}
                        sx={{
                            backgroundColor: '#EFE9FF ',
                            color: '#7B73A6 ',
                        }}
                    />
                </Box>
                <Box>
                    <Typography paragraph>
                        My professional career started when I dropped out of
                        College to attend Bloomtech (
                        <Box component="span" fontStyle="italic">
                            formerly Lambda School
                        </Box>
                        ), a technical training program designed for full-stack
                        web development and computer science fundamentals.
                    </Typography>
                    <Typography paragraph>
                        Following my graduation, I landed an internship at Mint
                        Mobile, which later converted into a permanent Software
                        Engineering position. Currently, I am part of the Core
                        Infrastructure team, where my colleagues and I undertake
                        the development and maintenance of internal tools and
                        operations.
                    </Typography>
                    <Typography paragraph>
                        On a more personal note, I love getting absolutely
                        decimated in the stock market and binging on anime and
                        crime documentaries. I'm also looking forward to my real
                        estate ventures!
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box
                        sx={{
                            display: 'grid',
                            gridAutoFlow: 'column',
                            gridColumnGap: '1rem',
                        }}
                    ></Box>

                    <Button
                        variant="contained"
                        target="_black"
                        href={link}
                        aria-label={label}
                        startIcon={icon}
                        rel="noopener noreferrer"
                        sx={{
                            minWidth: '0',
                            padding: '0.5rem',
                            background: 'palette.grey[100]',
                            color: 'palette.grey[800]',
                            textTransform: 'capitalize',
                        }}
                    >
                        {headline}
                    </Button>
                </Box>
            </Widget>
        </Section>
    )
}

export default AboutMe
