import React from 'react';

const ProjectCard = (props) => {
    return (
        <div className="casrd">
            <h1>{props.id}. {props.name}</h1>
        </div>
    );
};

export default ProjectCard;