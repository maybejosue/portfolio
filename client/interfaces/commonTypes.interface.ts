import { ReactElement } from 'react'

export type Children = { children: ReactElement }

export interface Company {
    logo: {
        src: string
    }
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
