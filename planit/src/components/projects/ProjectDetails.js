import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="project-details container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consect adad dadwdw ddgf afadad afaf fafzxgds  gsggf trdad  fdadd afff </p>
                </div>
                <div className="card-action grey lighten-3 grey-text">
                    <div>Posted by Cj</div>
                    <div>12pm, 28th Oct, 2020</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
