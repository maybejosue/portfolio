import Greeting from './greeting/Greeting'
import About from './about/About'
import Experience from './experience/Experience'
import Projects from './projects/Projects'
import Accomplishments from './accomplishments/Accomplishments'

export default function Home() {
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
