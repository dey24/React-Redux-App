import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect} from 'react-redux'
import {signUp} from '../store/actions/authAction'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
    handleChange = (e) => {
        this.setState({ 
            [e.target.value] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signUp(this.state)
    }
    render() {
        const { auth } = this.props;
        if (auth.uid) return <Redirect to= '/'/>

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white lighten-3">
                    <h5 className="grey-text text-darken-3">SignUp</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" autoComplete="off" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" autoComplete="off" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstname">FirstName</label>
                        <input type="text" id="firstname" autoComplete="off" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastname">LastName</label>
                        <input type="text" id="lastname" autoComplete="off" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-2">SignUp</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
