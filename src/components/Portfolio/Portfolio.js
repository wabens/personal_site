import React, { Component } from 'react';
import projectList from './projects';
import ProjectItem from './ProjectItem';
import './portfolio.css';
class Portfolio extends Component {

    render(){
        console.log(`projectlist `, projectList);
        
        return (
            <section className={'content-box'} id='portfolio-section'>
                <h2>Projects</h2>
                <div>
                    {
                        projectList.map( (project, i) => 
                            <ProjectItem project={project} key={i}/>
                        )
                    }
                </div>
            </section>
        )
    }
}

export default Portfolio