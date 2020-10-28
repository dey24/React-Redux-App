import React, { Component } from 'react'

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
        console.log(this.state)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white lighten-3">
                    <h5 className="grey-text text-darken-3">SignUp</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" autocomplete="off" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" autocomplete="off" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstname">FirstName</label>
                        <input type="text" id="firstname" autocomplete="off" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastname">LastName</label>
                        <input type="text" id="lastname" autocomplete="off" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-2">SignUp</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp
