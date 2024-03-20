import swan from "../assets/swan.jpg"

function Intro() {
    return (
        <div class="swanContainer">
            <div className="title" style= {{marginTop: '50px', marginLeft: '300px', fontSize: '97.31px'}}>Software Developer</div>
            <img src={swan} style={{
                height: '500px',
                width: 'auto',
                display: 'block',
                margin: '0 auto',
                paddingLeft: '15%'
            }} />
        </div>
    )
}

export default Intro