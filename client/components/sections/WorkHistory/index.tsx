import { useState } from 'react'
import { Section, UpdateMessage, Widget } from 'components/utils'
import {
    Typography,
    Tabs,
    Tab,
    Box,
    useTheme,
    useMediaQuery,
} from '@mui/material'
import TabPanel from './TabPanel'
import { jobSearchStatus, workHistory } from 'data'

const WorkHistory = () => {
    const [value, setValue] = useState(0)
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Section name="workHistory">
            <Widget>
                <Typography paragraph>Work History</Typography>
                {jobSearchStatus && (
                    <UpdateMessage message="Currently Job Searching!" />
                )}

                <Box
                    sx={{
                        display: { md: 'flex' },
                    }}
                >
                    <Tabs
                        value={value}
                        onChange={(e, v) => setValue(v)}
                        variant={matches ? 'scrollable' : 'standard'}
                        indicatorColor="secondary"
                        scrollButtons
                        allowScrollButtonsMobile
                        aria-label="work history tabs"
                        orientation={matches ? 'horizontal' : 'vertical'}
                        sx={{
                            mb: '2rem',
                        }}
                    >
                        {workHistory.map(({ company: { name } }, i) => (
                            <Tab
                                label={name}
                                key={i}
                                sx={{ textTransform: 'capitalize' }}
                            />
                        ))}
                    </Tabs>

                    <TabPanel {...workHistory[value]} />
                </Box>
            </Widget>
        </Section>
    )
}

export default WorkHistory
