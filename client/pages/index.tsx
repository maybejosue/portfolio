import type { NextPage } from 'next'
import {
    Experience,
    Projects,
    Accomplishments,
    Greeting,
    About,
} from 'components'

const Home: NextPage = () => {
    return (
        <>
            <Greeting />
            <About />
            <Experience />
            <Projects />
            <Accomplishments />
        </>
    )
}

export default Home
