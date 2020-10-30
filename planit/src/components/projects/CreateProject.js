import React, { Component } from 'react'
import createProject from '../store/actions/projectActions'
import { connect } from 'react-redux'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({ 
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        //console.log(this.state)
        this.props.createProject(this.state)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white lighten-3">
                    <h5 className="grey-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" autoComplete="off" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" className="materialize-textarea" autoComplete="off" onChange={this.handleChange}/> 
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-2">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapDispatchtoProps = (dispatch) => {
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchtoProps)(CreateProject)
