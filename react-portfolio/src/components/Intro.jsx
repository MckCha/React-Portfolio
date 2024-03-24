import swan from "../assets/swan.jpg"

function Intro() {
    return (
        <div class="introContainer">
            <div className="title" style= {{marginTop: '40px', marginLeft: '240px', fontSize: '97.31px'}}>Software Developer</div>
            <img src={swan} style={{
                height: '500px',
                width: 'auto',
                display: 'block',
                margin: '0 auto',
            }} />
        </div>
    )
}

export default Intro