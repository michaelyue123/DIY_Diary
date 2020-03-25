import React, { Component } from 'react';
import './styles/Login.css';
// import axios from 'axios';

class Login extends Component {
    state = { hidden: true };

    // apiUrl = '';

    // fetch data using api from backend server
    // componentDidMount() {
    //     axios.get(apiUrl)
    //     .then()
    // }

    // call back function
    onFormSubmit = e => {
        e.preventDefault();

        console.log(e.target.value);
    }

    toggleShow = () => {
        this.setState({ hidden: !this.state.hidden });
    }

    render() {
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
                                        value={this.state.email} 
                                        className="form-control"
                                        size="30"
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
                                        type={this.state.hidden ? "password" : "text"} 
                                        value={this.state.password} 
                                        name="password" 
                                        className="form-control"
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