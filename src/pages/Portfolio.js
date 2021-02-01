import React from "react";
import projects from "../projects.json";
import ProjectCard from "../components/ProjectCard"
import React, { Component } from 'react';


class Portfolio extends Component { 
    state = {projects}
    render() {
        return (
            <div>
                {this.state.projects.map(project => {
                    <ProjectCard 
                        id={project.project_id}
                        key={project.project_id}
                        name={project.project_name}
                    />
                })}
            </div>
        );
    }
}

export default Portfolio;