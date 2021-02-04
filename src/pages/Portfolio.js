import React, { Component } from 'react';
import projects from "../projects.json";
import ProjectCard from "../components/ProjectCard"





class Portfolio extends Component {
    state = {
        projects
    }

    render() {
        return (
         
            <div className="Container" style={{display: "flex", flexDirection: "row"}}>
                <div className="row" >
                <div className="col-sm-12">
                
                 <div>
           
                  </div>

                    <h1 style={{textAlign:"center"}} >Portfolio Page</h1>

           
                {this.state.projects.map(project=>{
                    return (
                    <ProjectCard 
                    id={project.project_id}
                    key={project.project_id}
                    title={project.project_name}
                    Repository={project.project_git}
                    Website={project.project_deploy}
                    Thumbnail={project.project_image}
                
                    
                    />

                    )
                })}
                 
            </div>
                 </div>
          </div>

      
        );
    }
}

export default Portfolio;