import React from 'react';
import './portfolio.css';
function ProjectItem (props) {
    let project = props.project;
    console.log(`props`, props);
    
    return(
        <div>
            <h3>{project.name}</h3>
            <div className = {'project-images'}>
                {project.images.map( (src, i) =>
                    // console.log(`image src `, src)
                <div className={'img-div'}>
                    <img key={i} src={src} alt={project.name+' screenshot'} height={'100%'} width={'100%'} />
                </div>
                )}
            </div>
        </div>
    )
}

export default ProjectItem