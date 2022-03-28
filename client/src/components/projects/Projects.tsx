import Slider from 'react-slick'
import { Box } from '@mui/material'
import { projects } from '../../content'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ProjectCard from './ProjectCard'

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

export default function Projects() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }

    return (
        <section id="projects">
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
        </section>
    )
}
