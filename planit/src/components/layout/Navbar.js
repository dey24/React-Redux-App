import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLink'
import SignedOutLinks from './SignedOutLink'
import { connect } from 'react-redux'


const Navbar = (props) => {
    const { auth } = props;
    //console.log(auth);
    const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>
    return (
        <nav className="nav-wrapper indigo darken-4">
            <div className="container">
                <Link to="/" className="brand-logo">Plan It</Link>
                { links }
            </div>
        </nav>
    )
}
const  mapStatetoProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStatetoProps)(Navbar)