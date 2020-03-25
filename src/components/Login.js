import React, { Component } from 'react';
import './styles/Login.css';
// import axios from 'axios';

class Login extends Component {
    state = {
        emailLogin: '', 
        passwordLogin: '',
        hidden: true,
        dummyData: [
            {
                id: 1,
                emailLogin: 'michaelyue123@gmail.com',
                passwordLogin: '11111111'
            },
            {
                id: 2,
                emailLogin: 'james@gmail.com',
                passwordLogin: '22222222'
            },
            {
                id: 1,
                emailLogin: 'williams@gmail.com',
                passwordLogin: '12345678'
            }
        ] 
    };

    // apiUrl = '';

    // fetch data using api from backend server
    // componentDidMount() {
    //     axios.get(apiUrl)
    //     .then()
    // }

    onInputChange = async e => {
        e.preventDefault();
        const { name, value } = e.target;
        const{ emailLogin, passwordLogin } = this.state; 

        this.setState({
            [name]: value,
        });

        console.log(emailLogin, passwordLogin);
    }

    // call back function
    onFormSubmit = e => {
        e.preventDefault();
        const{ emailLogin, passwordLogin } = this.state; 

        // Login Authentication
        if(emailLogin !== '' && passwordLogin !== '') {

        }
    }

    toggleShow = () => {
        this.setState({ hidden: !this.state.hidden });
    }

    render() {
        const { emailLogin, passwordLogin, hidden } = this.state;

        return (
            <div className="margin-top">
                <h1 className="login">Sign in</h1>
                <div className="ui container">
                    <div className="ui segment col-md-16">
                        <form onSubmit={this.onFormSubmit} className="ui form">
                            <div className="field">
                                <label id="one" htmlFor="email">Email</label>
                                <div className="input-group input-group-lg">
                                    <span className="input-group-addon">
                                            <i className="fa fa-envelope"></i>
                                    </span> 
                                    <input 
                                        type="email" 
                                        name="emailLogin"
                                        value={emailLogin} 
                                        className="form-control"
                                        size="30"
                                        onChange={this.onInputChange}
                                        placeholder="Email address" required
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label id="one" htmlFor="pass">Password</label>
                                <div className="input-group input-group-lg">
                                    <span className="input-group-addon">
                                        <i className="fa fa-lock"></i>
                                    </span> 
                                    <input 
                                        type={hidden ? "password" : "text"} 
                                        value={passwordLogin} 
                                        name="passwordLogin" 
                                        className="form-control"
                                        onChange={this.onInputChange}
                                        placeholder="Password" 
                                        minLength="8"
                                        required
                                    />
                                </div>   
                            </div>
                            <div className="form-check">
                                <input type="checkbox" onClick={this.toggleShow} className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">show password</label>
                            </div>
                            <button className="ui button" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;