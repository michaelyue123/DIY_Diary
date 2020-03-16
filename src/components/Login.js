import React from 'react';
import './styles/Login.css';

class Login extends React.Component {
    state = { hidden: true };

    // call back function
    onFormSubmit = event => {
        event.preventDefault();
    }

    toggleShow = () => {
        this.setState({ hidden: !this.state.hidden });
    }

    render() {
        return (
            <div className="ui container">
                <h1 className="login">Sign in</h1>
                <div className="ui segment">
                    <form className="ui form">
                        <div className="field">
                            <label id="one" for="email">Email</label>
                            <input 
                            type="email" 
                            value={this.state.email} 
                            id="email"
                            size="30"
                            placeholder="enter your email address" required
                            />
                        </div>
                        <div className="field">
                            <label id="one" for="pass">Password</label>
                            <input 
                            type={this.state.hidden ? "password" : "text"} 
                            value={this.state.password} 
                            name="password" 
                            id="pass"
                            placeholder="enter your password" 
                            minLength="8"
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