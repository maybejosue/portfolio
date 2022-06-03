import { useState } from 'react'
import { Box, Button, useMediaQuery, useTheme } from '@mui/material'
import Logo from './Logo'
import Menu from './Menu'
import { HideOnScroll } from 'components/utils'
import { scroller } from 'react-scroll'
import { Download as DownloadIcon } from '@mui/icons-material'

export const tabs = [
    { name: 'Home', link: 'home' },
    { name: 'About', link: 'aboutMe' },
    { name: 'Experience', link: 'workHistory' },
    { name: 'Projects', link: 'projects' },
    { name: 'Achievements', link: 'achievements' },
]

const Navbar = () => {
    const theme = useTheme()

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

    const scrollToSection = (section: string) => {
        scroller.scrollTo(section, {
            duration: 1000,
            delay: 0,
            smooth: true,
            offset: -60,
        })
        setIsMenuOpen(false)
    }

    const desktopMenu = (
        <Box
            sx={{
                display: { xs: 'none', md: 'block' },
            }}
        >
            {tabs.map(({ name, link }, i) => (
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
                    bgcolor: 'secordary.main',
                }}
                startIcon={<DownloadIcon />}
            >
                Resume
            </Button>
        </Box>
    )

    const mobileMenu = (
        <Box sx={{ display: { md: 'none' } }}>
            <Menu
                tabs={tabs}
                setIsMenuOpen={setIsMenuOpen}
                isMenuOpen={isMenuOpen}
                scrollToSection={scrollToSection}
            />
        </Box>
    )

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

                    {isDesktop ? desktopMenu : mobileMenu}
                </Box>
            </Box>
        </HideOnScroll>
    )
}

export default Navbar
