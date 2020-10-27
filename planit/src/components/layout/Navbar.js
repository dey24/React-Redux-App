import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLink'
import SignedOutLinks from './SignedOutLink'
const Navbar = () => {
    return (
        <nav className="nav-wrapper indigo darken-4">
            <div className="container">
                <Link to="/" className="brand-logo">Plan It</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default Navbar