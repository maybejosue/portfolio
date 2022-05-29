import { useState } from 'react'
import { Box, Button, useMediaQuery, useTheme } from '@mui/material'
import Logo from './Logo'
import Menu from './Menu'
import HideOnScroll from './utils/HideOnScroll'
import { scroller } from 'react-scroll'
import { tabs } from '../content'

export default function Navbar() {
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
            <nav>
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
            </nav>
        </HideOnScroll>
    )
}
