function Navbar() {
    const scrollToSection = (className) => {
        const section = document.querySelector(`.${className}`);
        if (section) {
            const scrollPosition = section.offsetTop - (window.innerHeight / 2) + (section.offsetHeight / 2);
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }
    };
    return (
        <div className="navContainer hidden">
            <div className="title name">Mike Cha</div>
            <div className="navButtons">
                <div className="navButton" onClick={() => scrollToSection('aboutContainer')}>About</div>
                <div className="navButton" onClick={() => scrollToSection('projectContainer')}>Projects</div>
            </div>
        </div>
    )
}

export default Navbar