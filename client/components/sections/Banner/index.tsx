import { Box, Typography, Button } from '@mui/material'
import { banner } from 'data'
import ParkIcon from '@mui/icons-material/Park'
import { Section } from 'components/utils'

const Banner = () => {
    const { headline, name, status, oneliner, link } = banner

    return (
        <Section name="home">
            <Box sx={{ p: '9rem 1rem ' }}>
                <Typography color="primary" gutterBottom variant="subtitle1">
                    {headline}
                </Typography>
                <Typography
                    color="primary"
                    gutterBottom
                    variant="h3"
                    component="h4"
                    sx={{ fontWeight: 600 }}
                >
                    {name}
                </Typography>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="h5"
                    sx={{ color: 'text.secondary' }}
                >
                    {oneliner}
                </Typography>
                <Typography
                    paragraph
                    sx={{ color: 'text.secondary', width: { md: '65%' } }}
                >
                    {status}
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<ParkIcon />}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        background:
                            'linear-gradient(95.12deg, rgba(236, 153, 0, 0.88) 2%, rgba(255, 37, 37, 0.78) 97.22%) !important',
                        color: '#E6E5E8 ',
                    }}
                >
                    LinkTree
                </Button>
            </Box>
        </Section>
    )
}

export default Banner
