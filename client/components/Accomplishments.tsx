import { Section, Widget } from 'components/utils'
import { AccomplishmentCard } from 'components'
import { Typography } from '@mui/material'
import { accomplishments } from 'content'

const Accomplishments = () => {
    return (
        <Section name="accomplishments">
            <Widget>
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
            </Widget>
        </Section>
    )
}

export default Accomplishments
