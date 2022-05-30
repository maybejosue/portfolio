import { useState } from 'react'
import { Box, Button, useMediaQuery, useTheme } from '@mui/material'
import { Logo, Menu } from 'components'
import { HideOnScroll } from 'components/utils'
import { scroller } from 'react-scroll'
import { tabs } from 'content'
import { Download as DownloadIcon } from '@mui/icons-material'

const Navbar = () => {
    const theme = useTheme()

    const [isMenuOpen, setIsMenuOpen] = useState(
        useMediaQuery(theme.breakpoints.up('md'))
    )

    const scrollToSection = (section: string) => {
        scroller.scrollTo(section, {
            duration: 1000,
            delay: 0,
            smooth: true,
            offset: -60,
        })
        setIsMenuOpen(false)
    }

    return (
        <HideOnScroll>
            <Box
                sx={{
                    zIndex: 'appBar',
                    width: '100%',
                    position: 'fixed',
                    backgroundColor: 'background.paper',
                }}
            >
                <Box
                    sx={{
                        p: '0.75rem',
                        display: 'flex',
                    }}
                >
                    <Logo />

                    {/* Desktop tabs */}
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'block' },
                        }}
                    >
                        {tabs.map(({ name, link }, i, arr) =>
                            i === arr.length - 1 ? (
                                <Button
                                    variant="contained"
                                    key={i}
                                    href={link}
                                    sx={{
                                        m: '0.2rem',
                                        textTransform: 'capitalize',
                                        color: '#E6E5E8',
                                        bgcolor: 'secordary.main',
                                    }}
                                    startIcon={<DownloadIcon />}
                                    download="Josue Rodriguez Resume.pdf"
                                >
                                    {name}
                                </Button>
                            ) : (
                                <Button
                                    key={i}
                                    onClick={() => {
                                        scrollToSection(link)
                                    }}
                                    sx={{
                                        m: '0.2rem',
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    {name}
                                </Button>
                            )
                        )}
                    </Box>

                    {/* Mobile tabs */}
                    <Box sx={{ display: { md: 'none' } }}>
                        <Menu
                            setIsMenuOpen={setIsMenuOpen}
                            isMenuOpen={isMenuOpen}
                            scrollToSection={scrollToSection}
                        />
                    </Box>
                </Box>
            </Box>
        </HideOnScroll>
    )
}

export default Navbar
