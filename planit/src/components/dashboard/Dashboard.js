import React, { Component } from 'react';
import Notification from './Notification';
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        //console.log(this.props)
        const { projects, auth } = this.props;
        if (!auth.uid) return <Redirect to= '/signin'/>
        return (
            <div className="dashboard">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects = {projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    console.log(state)
    return{
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}


export default compose(
    connect(mapStatetoProps), 
    firestoreConnect([
        {
            collection: 'projects'
        }
    ])
)(Dashboard)