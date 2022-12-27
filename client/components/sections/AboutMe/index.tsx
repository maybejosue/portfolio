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
        socials,
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
                        College to attend{' '}
                        <Link
                            href={'https://www.bloomtech.com/'}
                            color="secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Bloomtech (
                            <Box component="span" fontStyle="italic">
                                formerly Lambda School
                            </Box>
                            )
                        </Link>
                        , a technical training program designed to teach
                        full-stack web development and computer science
                        fundamentals.
                    </Typography>
                    <Typography paragraph>
                        You’ll often hear me say I’m in the Tech Industry by
                        accident because I discovered programming through an Ad
                        on Instagram. The boot camp sounded like a great
                        opportunity, and I ultimately decided to drop out of
                        College to attend the boot camp instead.
                    </Typography>
                    <Typography paragraph>
                        During the 9-18 months there, I fell in love with
                        solving problems using code, the dev community and
                        having big-brain mentors. After graduation, I worked for
                        the School as a Code Reviewer, where I was tasked with
                        providing actionable feedback to student developers on
                        their sprint challenge submissions. I later left that
                        position to focus on finding a full-time Software
                        Engineering role with more growth opportunities.
                    </Typography>
                    <Typography paragraph>
                        On a more personal note, I find interest in fashion even
                        though I don't consider myself particularly fashionable.
                        I also enjoy watching anime, reading manga, struggling
                        through Leetcode challenges, and immersing myself in the
                        sneaker-twitter community.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box
                        sx={{
                            display: 'grid',
                            gridAutoFlow: 'column',
                            gridColumnGap: '1rem',
                        }}
                    >
                        {socials.map(({ icon, link, label }, i) => (
                            <Button
                                variant="contained"
                                key={i}
                                target="_black"
                                href={link}
                                aria-label={label}
                                rel="noopener noreferrer"
                                sx={{
                                    minWidth: '0',
                                    padding: '0.5rem',
                                    background: 'palette.grey[100]',
                                    color: 'palette.grey[800]',
                                    textTransform: 'capitalize',
                                }}
                            >
                                {icon}
                            </Button>
                        ))}
                    </Box>

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
