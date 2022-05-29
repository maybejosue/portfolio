import { Section } from 'components/utils'
import { Box, Paper, Button, Typography, Avatar, Chip } from '@mui/material'
import { LocationOn as LocationOnIcon } from '@mui/icons-material'
import { userDetails } from 'content'

const About = () => {
    const {
        name,
        profession,
        location: { city, state },
        description,
        socials,
        avatar: { src },
        contact: { icon, link, headline, label },
    } = userDetails

    return (
        <Section sectionName="about">
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
                        <LocationOnIcon sx={{ marginLeft: '-5px' }} /> {city},{' '}
                        {state}
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
            {description}
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
                    startIcon={icon}
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
                    {headline}
                </Button>
            </Box>
        </Section>
    )
}

export default About
