import React from 'react';
import './styles/Navbar.css';
import { Link } from 'react-router-dom';


const NavBar = () =>  {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Panda Diary</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/register">
                            Register
                        </Link>
                        <Link className="nav-item nav-link" to="/login">
                            Sign in 
                        </Link>  
                        <Link className="nav-item nav-link" to="/content">
                            Content Page
                        </Link>   
                    </div>
                </div>
            </nav>
        </nav>
    );
}

export default NavBar;

