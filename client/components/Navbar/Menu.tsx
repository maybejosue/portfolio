import { Box, Button, Drawer, IconButton } from '@mui/material'
import { Menu as MenuIcon, Download as DownloadIcon } from '@mui/icons-material'

type Props = {
    isMenuOpen: boolean
    setIsMenuOpen: (isMenuOpen: boolean) => void
    scrollToSection: (section: string) => void
    tabs: Array<{ name: string; link: string }>
}

const Menu = ({ setIsMenuOpen, isMenuOpen, scrollToSection, tabs }: Props) => {
    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <>
            <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor="right"
                variant="temporary"
                open={isMenuOpen}
                onClose={closeMenu}
            >
                <Box
                    sx={{
                        p: '3rem',
                        display: 'grid',
                    }}
                >
                    {tabs.map(({ name, link }, i) => (
                        <Button
                            key={i}
                            onClick={() => scrollToSection(link)}
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
            </Drawer>
        </>
    )
}

export default Menu
