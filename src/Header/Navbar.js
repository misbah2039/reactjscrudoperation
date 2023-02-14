import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-primary">
                <div className="container">
                    <NavLink className="navbar-brand text-white" href="#">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active text-white" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/about">About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link me-auto text-white" to="/adduser">Add User</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link me-auto text-white" to="/viewuser">Add User</NavLink>
                            </li> */}
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar