import React from 'react';
import './Login.css';

class Login extends React.Component {
    state = { email:'', password:''};


    // call back function
    onFormSubmit = event => {
        event.preventDefault();

        // this.setState({ email:  })
    }

    render() {
        return (
            <div className="ui container">
                <h3>Sign in</h3>
                <div className="ui segment">
                    <form className="ui form">
                        <div className="field">
                            <label>email</label>
                            <input type="text" name="email" placeholder="enter your email address" required/>
                        </div>
                        <div className="field">
                            <label>password</label>
                            <input type="text" name="password" placeholder="enter your password" required/>
                        </div>
                        <button className="ui button" type="submit" onSubmit={this.onFormSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;