import React from 'react';
import { Redirect } from 'react-router-dom';


class Navbar extends React.Component {

    state = { redirect: false };

    setRedirect = () => {
        this.setState({
            redirect: true
        });
    }

    renderRedirect = () => {
        if(this.state.redirect) {
            return <Redirect to='' />;
        }
    }


    render() {
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/#">DIY_Diary</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" onClick={this.setRedirect} href="/#">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" onClick={this.setRedirect} href="/#">Register</a>
                        <a class="nav-item nav-link" onClick={this.setRedirect} href="/#">Sign in</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;