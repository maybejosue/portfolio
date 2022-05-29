import BloomTechIMG from 'assets/bloomtech.webp'
import { Job } from 'interfaces/commonTypes.interface'

const bloomtech: Job = {
    company: {
        logo: BloomTechIMG,
        name: 'bloomtech',
        formerName: 'lambda school',
        site: 'https://www.bloomtech.com/',
    },
    positions: [
        {
            title: 'code reviewer',
            startDate: {
                month: 'mar',
                year: 2021,
            },
            endDate: {
                isPresent: false,
                month: 'aug',
                year: 2021,
            },
            location: {
                isRemote: true,
                city: '',
                state: '',
            },
            contributions: [
                'provided weekly actionable feedback and code reviews to 700+ student developers on full-stack technologies',
                'assisted Lead Instructors by recommending which concepts to review',
                'trained incoming Code Reviewers on the company’s guidelines and workflow for code reviews',
            ],
        },
    ],
}

const reseller: Job = {
    company: {
        logo: {
            src: '',
        },
        name: 'self-employed',
        formerName: '',
        site: '',
    },
    positions: [
        {
            title: 'reseller',
            startDate: {
                month: 'jan',
                year: 2016,
            },
            endDate: {
                isPresent: false,
                month: 'dec',
                year: 2020,
            },
            location: {
                isRemote: true,
                city: '',
                state: '',
            },
            contributions: [
                'operated store selling brand-name men’s clothing, hard-to-find sneakers, art, and accessories',
                'managed an inventory of over 1,200 items across various third-party platforms',
                'serviced customers inquiring about the availability, sizing, status of order(s), product malfunctions, and transaction issues all while maintaining an overall rating of 5 stars on each platform',
            ],
        },
    ],
}

export const workHistory: Job[] = [bloomtech, reseller]

// export const workHistory = [
//     {
//         avatar: bloomtech,
//         link: 'https://www.bloomtech.com/',
//         companyName: 'Bloomtech',
//         formerName: 'Lambda School',
//         positions: [
//             {
//                 positionName: 'Code Reviewer',
//                 startDate: {
//                     month: 'March',
//                     year: '2021',
//                 },

//                 endDate: {
//                     isPresent: false,
//                     month: 'Aug',
//                     year: '2021',
//                 },

//                 location: {
//                     isRemote: true,
//                     city: '',
//                     state: '',
//                 },
//                 highlights: [
//                     'Provided weekly actionable feedback and code reviews to 700+ student developers on full-stack technologies',
//                     'Assisted Lead Instructors by recommending which concepts to review',
//                     'Trained incoming Code Reviewers on the company’s guidelines and workflow for code reviews',
//                 ],
//             },
//         ],
//     },
//     {
//         avatar: '',
//         link: '',
//         companyName: 'Self-employed',
//         formerName: '',
//         positions: [
//             {
//                 positionName: 'Reseller',
//                 startDate: {
//                     month: 'Jan',
//                     year: '2016',
//                 },

//                 endDate: {
//                     isPresent: false,
//                     month: 'Dec',
//                     year: '2020',
//                 },

//                 location: {
//                     isRemote: true,
//                     city: '',
//                     state: '',
//                 },
//                 highlights: [
//                     'Operated store selling brand-name men’s clothing, hard-to-find sneakers, art, and accessories',
//                     'Managed an inventory of over 1,200 items across various third-party platforms',
//                     'Serviced customers inquiring about the availability, sizing, status of order(s), product malfunctions, and transaction issues all while maintaining an overall rating of 5 stars on each platform',
//                 ],
//             },
//         ],
//     },
// ]
