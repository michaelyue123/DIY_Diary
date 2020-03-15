import React from 'react';
import './styles/Register.css';
import { Redirect } from 'react-router-dom';

class Register extends React.Component {

    state = { email: '', password: ''};

    handleEmailChange = e => {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange = e => {
        this.setState({ password: e.target.value });
    }

    onFormSubmit = e => {
        e.preventDefault();

        if(this.state.email === e.target.value && 
            this.state.password === e.target.value) {
            return <Redirect to='/Login' />;
        }
    }

    render() {
        return (
            <div>
                <h1 class="ui dividing header" id="register">Register</h1>
                <div className="ui segment" id="container">
                    <form className="ui form">
                        <div className="field">
                            <label id="text">Email Address</label>
                            <input type="email" onChange={this.handleEmailChange} type="email" id="email" size="30" required />
                        </div>
                        <div className="field">
                            <label for="pass" id="text">Password (8 characters minimum)</label>
                            <input type="password" onChange={this.handlePasswordChange} id="pass" name="password" placeholder="password" minLength="8" required/>
                        </div>
                        <div className="field">
                            <label id="text">Confirm Password</label>
                            <input type="password" onChange={this.handlePasswordChange} id="pass" name="password" placeholder="Confirm password" required/>
                        </div>
                        <div className="form-check">
                            <p id="text">
                                <input type="checkbox" 
                                name="terms" 
                                class="form-check-input" 
                                id="exampleCheck1" 
                                />
                                By creating an account you agree to our <a href="/">Terms & Privacy</a>.
                            </p>
                            <button onSubmit={this.onFormSubmit} type="submit" class="ui button" href="/Login">Register</button>
                        </div>

                        <div class="container signin">
                            <p id="text">Already have an account? <a href="/Login">Sign in</a>.</p>
                        </div>             
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;