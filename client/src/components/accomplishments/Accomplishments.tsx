import Section from '../helpers/Section'
import AccomplishmentCard from './AccomplishmentCard'
import { Typography } from '@mui/material'
import { accomplishments } from '../../content'

export default function Accomplishments() {
    return (
        <Section sectionName={'accomplishments'}>
            <Typography
                sx={{
                    mb: '1rem',
                }}
            >
                Accomplishments
            </Typography>
            {accomplishments.map((accomplishment, i) => (
                <AccomplishmentCard {...accomplishment} key={i} />
            ))}
        </Section>
    )
}