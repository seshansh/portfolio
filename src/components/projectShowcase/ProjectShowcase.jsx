import "./ProjectShowcase.css"

const ProjectShowcase = (props) => {
    return(
        <div className="projectShowcase">
            <div className="projectShowcase-container">
            <div className="projectShowcase-imageContainer">
                <div className="projectShowcase-ButtonContainer">
                    <a href={props.code} className='btn secondary' target="_blank" rel="noopener noreferrer">Code</a>
                    <a href={props.live} className='btn secondary'>Live Project</a>
                </div>
                <img height={'100%'} src={props.imageSrc} alt={props.projectName}/>
            </div>
            <div className="projectShowcase-content">
                <div className="projectShowcase-content" style={{width:'100%'}}>
                    <h4>{props.projectName}</h4>
                    <p>{props.aboutProject}</p>
                </div>
                <div className="projectShowcase-content" style={{width:'100%'}}>
                <h4>Tech Used</h4>
                    <p>{props.techUsed}</p>
                </div>
                <div className="projectShowcase-content" style={{width:'100%'}}>
                <h4>What i learned</h4>
                    <p>{props.learned}</p>
                </div>
    
                </div>
            </div>
        </div>
    )
}

export default ProjectShowcase;