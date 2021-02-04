import React from 'react';
import "./ProjectCard.css"



const ProjectCard = (props) => {
    return (
  <div style={{border:"solid"}} className="card">
  <img src={props.Thumbnail} className="card-img-top" alt="Project"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text"></p>
    <a href={props.Website} className="btn btn-link">Website Link</a>
    </div>
  </div>

    );
};

export default ProjectCard;