import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'
/* import './Navbar.css' */

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [userDropdown, setUserDropdown] = useState(false);
    

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={() => setClick(false)}>
                        Rit.
                    </Link>
                    <div className="menu-icon" onClick={() => setClick(!click)}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={() => setClick(!click)}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/leaderboards/" className="nav-links" onClick={() => setClick(!click)}>
                                Leaderboards
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/maps/" className="nav-links" onClick={() => setClick(!click)}>
                                Maps
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/projects" className="nav-links" onClick={() => setClick(!click)}>
                                Projects
                            </Link>
                        </li> */}
                        
                    </ul>
                    <li className="nav-user">
                        <img src="assets/literally-me.png"
                        alt="User" className="nav-user-img" onClick={() => setUserDropdown(!userDropdown)} />
                        {
                            userDropdown && (
                                <div className="nav-user-dropdown">
                                    <ul>
                                        <li>
                                            <Link to="/profile" className="nav-user-links" onClick={() => setClick(!click)}>
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/logout" className="nav-user-links" onClick={() => setClick(!click)}>
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )
                        }
                    </li>
                </div>
            </nav>
        </>
    )
}

export default Navbar
