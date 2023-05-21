import EmailIcon from '@mui/icons-material/Email'
import img from 'assets/josue.png'

const contact = {
    icon: <EmailIcon />,
    link: 'mailto:maybejosue@gmail.com',
    headline: 'Get in touch',
    label: 'Email',
}

export const aboutMe = {
    name: 'Josue Rodriguez',
    profession: 'Software Engineer',
    avatar: img,
    location: {
        city: 'Hemet',
        state: 'CA',
    },
    contact: contact,
}
