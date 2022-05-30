import cc from 'assets/cc.webp'
import wlj from 'assets/wlj.webp'
import aa from 'assets/aa.webp'
import sa from 'assets/sa.webp'

export const projects = [
    {
        title: 'Community Calendar',
        img: cc,
        description:
            'Web app designed for users to find events at a more localized neighborhood level.',
        github: 'https://github.com/BloomTech-Labs/community-calendar-fe',
        deployed: 'https://www.northendcalendar.com/',
        tech: ['React', 'Apollo Client', 'GraphQL', 'AWS'],
    },
    {
        title: 'Anime Archive',
        img: aa,
        description:
            'A mobile, web-based, online database of information related to anime.',
        github: 'https://github.com/Anime-Archive/anime-archive-fe',
        deployed: 'https://animearchive.netlify.app/',
        tech: ['React', 'AniList API', 'GraphQL', 'Figma'],
    },
    {
        title: 'Weightlifting Journal',
        img: wlj,
        description: 'Web app to track muscle, fat, and weight loss progress.',
        github: 'https://github.com/BW-FT-Weight-Lifting-Journal-12/ui-marketing-page',
        deployed: 'https://weight-lifting-journal-12.netlify.app/index.html',
        tech: ['HTML', 'LESS/CSS'],
    },
    {
        title: 'Silent Auction',
        img: sa,
        description:
            'Online auction platform to create and manage charitable events.',
        github: 'https://github.com/Web26-Silent-Auction-1/FE',
        deployed: '',
        tech: ['React', 'Redux'],
    },
]
