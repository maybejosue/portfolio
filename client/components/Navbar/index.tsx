import { useState } from 'react'
import { Box, Button, useMediaQuery, useTheme } from '@mui/material'
import Logo from './Logo'
import Menu from './Menu'
import { HideOnScroll } from 'components/utils'
import { scroller } from 'react-scroll'
import { tabs } from './tabs'
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
                <nav>
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
                            {tabs.map(({ name, link }, i, arr) => (
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
                            ))}
                            <Button
                                variant="contained"
                                href="/resume.pdf"
                                sx={{
                                    m: '0.2rem',
                                    textTransform: 'capitalize',
                                    color: '#E6E5E8',
                                    bgcolor: 'secordary.main',
                                }}
                                startIcon={<DownloadIcon />}
                            >
                                Resume
                            </Button>
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
                </nav>
            </Box>
        </HideOnScroll>
    )
}

export default Navbar
