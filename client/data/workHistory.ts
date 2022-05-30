import bloomTechIMG from 'assets/bloomtech.webp'
import mintMobileIMG from 'assets/mintmobile.webp'
import { StaticImageData } from 'next/image'

export interface Company {
    logo: string | StaticImageData
    name: string
    formerName?: string
    site?: string
}

export interface Position {
    title: string
    startDate: {
        month: string
        year: number
    }
    endDate: {
        isPresent: boolean
        month: string
        year: number
    }
    location: {
        isRemote: boolean
        city: string
        state: string
    }
    contributions: string[]
}
export interface Job {
    company: Company
    positions: Position[]
}

const mintmobile: Job = {
    company: {
        logo: mintMobileIMG,
        name: 'Mint Mobile',
        site: 'https://www.mintmobile.com/',
    },
    positions: [
        {
            title: 'Software Engineer Intern',
            startDate: {
                month: 'apr',
                year: 2022,
            },
            endDate: {
                isPresent: true,
                month: '',
                year: 2022,
            },
            location: {
                isRemote: true,
                city: '',
                state: '',
            },
            contributions: [],
        },
    ],
}

const bloomtech: Job = {
    company: {
        logo: bloomTechIMG,
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
        logo: '',
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

export const workHistory = [mintmobile, bloomtech, reseller]
