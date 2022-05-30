import type { NextPage } from 'next'
import {
    Banner,
    AboutMe,
    WorkHistory,
    Achievements,
    Projects,
} from 'components/sections'

const Home: NextPage = () => {
    return (
        <>
            <Banner />
            <AboutMe />
            <WorkHistory />
            <Projects />
            <Achievements />
        </>
    )
}

export default Home
