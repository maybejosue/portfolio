import type { NextPage } from 'next'
// import {
//     Experience,
//     Projects,
//     Accomplishments,
//     Greeting,
//     About,
// } from 'components'
import {
    Banner,
    AboutMe,
    WorkHistory,
    Accomplishments,
    Projects,
} from 'components/sections'

const Home: NextPage = () => {
    return (
        <>
            <Banner />
            <AboutMe />
            <WorkHistory />
            <Projects />
            <Accomplishments />
        </>
    )
}

export default Home
