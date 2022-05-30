import Slider from 'react-slick'
import { Box } from '@mui/material'
import { projects } from 'data'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ProjectCard from './ProjectCard'
import { Section } from 'components/utils'

const NextArrow = (props: any) => {
    const { className, style, onClick } = props

    return (
        <Box
            className={className}
            sx={{
                ...style,
                zIndex: 5,
                right: '3%',
                '&:before': { color: 'primary.main' },
            }}
            onClick={onClick}
        />
    )
}

const PrevArrow = (props: any) => {
    const { className, style, onClick } = props

    return (
        <Box
            className={className}
            sx={{
                ...style,
                zIndex: 5,
                left: '3%',
                '&:before': { color: 'primary.main' },
            }}
            onClick={onClick}
        />
    )
}

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }

    return (
        <Section name="projects">
            <Box
                sx={{
                    marginBottom: '3rem',
                }}
            >
                <Slider {...settings}>
                    {projects.map((project, i) => (
                        <ProjectCard {...project} key={i} />
                    ))}
                </Slider>
            </Box>
        </Section>
    )
}

export default Projects
