import { Section, Widget } from 'components/utils'
import Dropdown from './Dropdown'
import { Typography } from '@mui/material'
import { achievements } from 'data'

const Achievements = () => {
    return (
        <Section name="achievements">
            <Widget>
                <Typography
                    sx={{
                        mb: '1rem',
                    }}
                >
                    Achievements
                </Typography>
                {achievements.map((achievement, i) => (
                    <Dropdown {...achievement} key={i} />
                ))}
            </Widget>
        </Section>
    )
}

export default Achievements
