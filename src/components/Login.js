import React from 'react';
import './Login.css';

class Login extends React.Component {
    state = { email:'', password:'', hidden:true };

    handleEmailChange = e => {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange = e => {
        this.setState({ password: e.target.value });
    }

    toggleShow =() => {
        this.setState({ hidden: !this.state.hidden });
    }

    // call back function
    onFormSubmit = event => {
        event.preventDefault();

    }

    render() {
        return (
            <div className="ui container">
                <h3>Sign in</h3>
                <div className="ui segment">
                    <form className="ui form">
                        <div className="field">
                            <label>email</label>
                            <input 
                            type="text" 
                            value={this.state.email} 
                            onChange={this.handleEmailChange} 
                            name="email" 
                            placeholder="enter your email address" required
                            />
                        </div>
                        <div className="field">
                            <label>password</label>
                            <input 
                            type={this.state.hidden ? "password" : "text"} 
                            value={this.state.password} 
                            onChange={this.handlePasswordChange} 
                            name="password" 
                            placeholder="enter your password" 
                            required
                            />
                        </div>
                        <div className="form-check">
                            <input type="checkbox" onClick={this.toggleShow} class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">show password</label>
                        </div>
                        <button className="ui button" type="submit" onSubmit={this.onFormSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;