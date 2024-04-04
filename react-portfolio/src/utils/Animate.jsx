
function Animate() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });
    const hiddenElements = document.querySelectorAll('.navContainer, .introContainer, .aboutRow ,.projectContainer, .footerContainer');
    hiddenElements.forEach((el) => observer.observe(el));
    return (
        <></>
    )
}

export default Animate