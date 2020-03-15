import React from 'react';
import './styles/Navbar.css'


const NavBar = () =>  {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/Home">DIY Diary</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" href="/Home">
                            Home
                            <span class="sr-only">(current)</span>
                        </a>
                        <a class="nav-item nav-link" href="/Register">
                            Register
                        </a>
                        <a class="nav-item nav-link" href="/Login">
                            Sign in 
                        </a>     
                    </div>
                </div>
            </nav>
        </nav>
    );
}

export default NavBar;

