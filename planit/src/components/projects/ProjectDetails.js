import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const ProjectDetails = (props) => {
    const { project,auth } = props;
    if (!auth.uid) return <Redirect to= '/signin'/>
    if (project) {
        return(
            <div className="project-details container section">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{ project.title} </span>
                        <p> {project.content} </p>
                    </div>
                    <div className="card-action grey lighten-3 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>12pm, 28th Oct, 2020</div>
                    </div>
                </div>
            </div>
        )
    } else{
        return (
            <div className = "container center black-text">Loading Project...</div>
            )
    }
    
}
const mapStatetoProps   = (state, ownProps) => {
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails)
