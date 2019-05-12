import React from 'react';
import Link from '@material-ui/icons/Link'
import './portfolio.css';
function ProjectItem (props) {
    let project = props.project;
    console.log(`props`, props);
    
    return(
        <div className={'project-box'}>
            <h4>{project.name}</h4>
            <div className = {'project-images'}>
                {project.images.map( (src, i) =>
                    <div className={'img-div'}>
                        <img key={i} src={src} alt={project.name+' screenshot'} height={'auto%'} width={'100%'} />
                    </div>
                )}
            </div>
            <p>{project.description}</p>
            <a href={project.github}><Link/>Github</a>
        </div>
    )
}

export default ProjectItem