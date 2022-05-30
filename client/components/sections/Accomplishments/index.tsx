import { Section, Widget } from 'components/utils'
import Dropdown from './Dropdown'
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
                    <Dropdown {...accomplishment} key={i} />
                ))}
            </Widget>
        </Section>
    )
}

export default Accomplishments
