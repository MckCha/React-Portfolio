import { useEffect } from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Animate from './utils/Animate'

function App() {
    useEffect(() => {
        Animate();
    }, []);
    return (
        <>
            <Navbar/>
            <Intro/>
            <About/>
            <Projects/>
            <Footer />
        </>
    )
}

export default App
