import financialGif from '../assets/financial-data-demo.gif';
import vibeViewGif from '../assets/vibe-view-demo.gif';
import blockbusterGif from '../assets/blockbuster2-demo.gif';
import handleClick from '../utils/handleClick';

function Projects() {
    return (
        <div className="projectContainer hidden">
            <div className="title">Projects</div>
            <div className="projects">
                <div>
                    <div className="title subTitle">Financial Data Sanitizer</div>
                    <div className="projectImage">
                        <img src= {financialGif} style={{width: '400px', height: '400px'}}/>
                    </div>
                    <div className="tag">Python</div>
                    <div className="tag">Excel</div>
                    <div className="tag">Gui</div>
                    <div className="title subTitle">
                        <span className="span" onClick={() => handleClick('https://github.com/MckCha/Financial-Data-Sanitizer')}>Github : Financial Data Sanitizer</span>
                    </div>
                </div>
                <div>
                    <div className="title subTitle">Vibe View</div>
                    <div className="projectImage">
                        <img src= {vibeViewGif} style={{width: '400px', height: '400px'}}/>
                    </div>
                    <div className="tag">Php</div>
                    <div className="tag">JScript</div>
                    <div className="tag">Api</div>
                    <div className="title subTitle">
                        <span className="span" onClick={() => handleClick('https://github.com/SamuelKaing/Senior-Project')}>Github : Vibe View</span>
                    </div>
                </div>
                <div>
                    <div className="title subTitle">Blockbuster 2</div>
                    <div className="projectImage">
                        <img src= {blockbusterGif} style={{width: '400px', height: '400px'}}/>
                    </div>
                    <div className="tag">Html</div>
                    <div className="tag">Php</div>
                    <div className="tag">Sql</div>
                    <div className="title subTitle">
                        <span className="span" onClick={() => handleClick('https://github.com/MckCha/blockbuster2')}>Github : Blockbuster 2</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Projects