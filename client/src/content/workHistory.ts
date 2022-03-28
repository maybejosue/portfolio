import bloomtech from '../assests/bloomtech.webp'

export const workHistory = [
    {
        avatar: bloomtech,
        link: 'https://www.bloomtech.com/',
        companyName: 'Bloomtech',
        formerName: 'Lambda School',
        positions: [
            {
                positionName: 'Code Reviewer',
                startDate: {
                    month: 'March',
                    year: '2021',
                },

                endDate: {
                    isPresent: false,
                    month: 'Aug',
                    year: '2021',
                },

                location: {
                    isRemote: true,
                    city: '',
                    state: '',
                },
                highlights: [
                    'Provided weekly actionable feedback and code reviews to 700+ student developers on full-stack technologies',
                    'Assisted Lead Instructors by recommending which concepts to review',
                    'Trained incoming Code Reviewers on the company’s guidelines and workflow for code reviews',
                ],
            },
        ],
    },
    {
        avatar: '',
        link: '',
        companyName: 'Self-employed',
        formerName: '',
        positions: [
            {
                positionName: 'Reseller',
                startDate: {
                    month: 'Jan',
                    year: '2016',
                },

                endDate: {
                    isPresent: false,
                    month: 'Dec',
                    year: '2020',
                },

                location: {
                    isRemote: true,
                    city: '',
                    state: '',
                },
                highlights: [
                    'Operated store selling brand-name men’s clothing, hard-to-find sneakers, art, and accessories',
                    'Managed an inventory of over 1,200 items across various third-party platforms',
                    'Serviced customers inquiring about the availability, sizing, status of order(s), product malfunctions, and transaction issues all while maintaining an overall rating of 5 stars on each platform',
                ],
            },
        ],
    },
]
