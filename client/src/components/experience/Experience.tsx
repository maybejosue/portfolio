import { useState } from 'react'
import Section from '../helpers/Section'
import { Typography, Tabs, Tab, Box, useTheme } from '@mui/material'
import TabPanel from './TabPanel'
import useMediaQuery from '@mui/material/useMediaQuery'
import UpdateMessage from '../helpers/UpdateMessage'
import { jobSearchStatus } from '../../content/'
import { workHistory } from '../../content/'

export default function Experience() {
    const [value, setValue] = useState(0)
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Section sectionName="experience">
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
                    {workHistory.map(({ companyName }, i) => (
                        <Tab
                            label={companyName}
                            key={i}
                            sx={{ textTransform: 'capitalize' }}
                        />
                    ))}
                </Tabs>

                <TabPanel {...workHistory[value]} />
            </Box>
        </Section>
    )
}
