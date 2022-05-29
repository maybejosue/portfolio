import { Box, Button, Drawer, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { tabs } from '../content'

type Props = {
    setIsMenuOpen: (isMenuOpen: boolean) => void
    isMenuOpen: boolean
    scrollToSection: (section: string) => void
}

const Menu = ({ setIsMenuOpen, isMenuOpen, scrollToSection }: Props) => {
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
                    {tabs.map(({ name, link }, i, arr) =>
                        i === arr.length - 1 ? (
                            <Button
                                variant="contained"
                                key={i}
                                href={link}
                                rel="noopener noreferrer"
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
                                onClick={() => scrollToSection(link)}
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
            </Drawer>
        </>
    )
}

export default Menu
