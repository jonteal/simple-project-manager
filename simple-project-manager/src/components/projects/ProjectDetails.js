import React from "react";

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis blanditiis autem recusandae similique asperiores sed, ratione nemo ducimus voluptate explicabo aliquid, ipsa accusamus impedit consectetur quo accusantium vero praesentium numquam!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Jon Jackson</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;