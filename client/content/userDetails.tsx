import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import StarIcon from '@mui/icons-material/Star'
import img from 'assets/josue.webp'

export const userDetails = {
    name: 'Josue Rodriguez',
    profession: 'Software Engineer',
    avatar: img,
    location: {
        city: 'Hemet',
        state: 'CA',
    },
    socials: [
        {
            icon: <LinkedInIcon />,
            link: 'https://www.linkedin.com/in/maybejosue/',
            label: 'Linkedin',
        },
        {
            icon: <GitHubIcon />,
            link: 'https://github.com/maybejosue',
            label: 'Github',
        },
        {
            icon: <StarIcon />,
            link: 'https://leetcode.com/maybejosue/',
            label: 'Leetcode',
        },
    ],
    contact: {
        icon: <EmailIcon />,
        link: 'mailto:maybejosue@gmail.com',
        headline: 'Get in touch',
        label: 'Email',
    },
}
