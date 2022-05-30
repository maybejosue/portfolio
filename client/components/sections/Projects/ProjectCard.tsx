import React from 'react'

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    IconButton,
    Divider,
} from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'

interface Props {
    title: string
    img: {
        src: string
    }
    description: string
    github: string
    deployed: string
    tech: string[]
}

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

const ProjectCard = (project: Props) => {
    const {
        title,
        img: { src },
        description,
        github,
        deployed,
        tech,
    } = project
    return (
        <Card
            sx={{
                width: { xs: 370, sm: 320, md: '85%' },
                display: { md: 'flex' },
                background: { xs: 'background.paper', md: 'transparent' },
                position: 'relative',
                boxShadow: 'none',
                margin: '0 auto',
            }}
        >
            <CardMedia
                component="img"
                image={src}
                alt={`Live snapshot of ${title}`}
                sx={{
                    height: { xs: 250, md: 400 },
                    width: '370',
                    objectPosition: 'center top',
                    maxWidth: { md: 300 },
                }}
            />

            <CardContent
                sx={{
                    margin: { md: 'auto' },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        mb: '0.5rem',
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        sx={{ flex: 1, display: 'flex', alignItems: 'center' }}
                    >
                        {title}
                    </Typography>

                    {github && (
                        <IconButton
                            href={github}
                            target="_blank"
                            aria-label="Github"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon />
                        </IconButton>
                    )}
                    {deployed && (
                        <IconButton
                            href={deployed}
                            target="_blank"
                            aria-label="Open in new tab"
                            rel="noopener noreferrer"
                        >
                            <OpenInNewIcon />
                        </IconButton>
                    )}
                </Box>

                <ResponsiveEllipsis
                    text={description}
                    maxLine="4"
                    component="p"
                    basedOn="letters"
                    style={{
                        lineHeight: 1.5,
                    }}
                />

                <Divider variant="middle" />

                <Typography
                    noWrap
                    sx={{
                        mt: '1rem',
                        color: 'text.secondary',
                        '& span': {
                            mr: '1rem',
                        },
                    }}
                >
                    {tech.map((name, i) => (
                        <Box component="span" key={i}>
                            {name}
                        </Box>
                    ))}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ProjectCard
