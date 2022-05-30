const languages = {
    title: 'languages',
    columns: ['language', 'level'],
    rows: [
        {
            language: 'English',
            level: 'Advanced',
        },
        {
            language: 'Spanish',
            level: 'Intermediate',
        },
    ],
}

const certifications = {
    title: 'certifications',
    columns: ['issuer', 'year', 'title', 'link'],
    rows: [
        {
            issuer: 'HackerRank',
            title: 'CSS',
            link: 'https://www.hackerrank.com/certificates/3b1268aec7df',
            year: '2021',
        },
        {
            issuer: 'HackerRank',
            title: 'JavaScript (Intermediate)',
            link: 'https://www.hackerrank.com/certificates/bd88614829f4',
            year: '2021',
        },
        {
            issuer: 'HackerRank',
            title: 'JavaScript (Basic)',
            link: 'https://www.hackerrank.com/certificates/cee2cc72e83d',
            year: '2021',
        },
        {
            issuer: 'HackerRank',
            title: 'Python (Basic)',
            link: 'https://www.hackerrank.com/certificates/57335824c929',
            year: '2021',
        },
        {
            issuer: 'HackerRank',
            title: 'Problem Solving (Basic)',
            link: 'https://www.hackerrank.com/certificates/e2df5d015186',
            year: '2021',
        },
        {
            issuer: 'HackerRank',
            title: 'React (Basic)',
            link: 'https://www.hackerrank.com/certificates/ba885fdc1b79',
            year: '2021',
        },
        {
            issuer: 'Bloomtech (formerly Lambda School)',
            title: 'Full-Stack Web Development + Technical Interviewing',
            link: 'https://www.credly.com/badges/13c57035-cf72-4e2d-9e05-7dee0de2e8c3/public_url',
            year: '2020',
        },
    ],
}

export const achievements = [languages, certifications]
