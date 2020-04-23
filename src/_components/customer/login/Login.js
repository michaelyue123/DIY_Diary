import React, { Component } from 'react';
import '../../styles/Login.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../../_actions';


const MySwal = withReactContent(Swal);

class Login extends Component {

    constructor(props){
        super(props);
    }

    state = {
        emailLogin: '', 
        passwordLogin: '',
        hidden: true,
        isauthenticated: false
    };

    onInputChange = async e => {
        e.preventDefault();
        const { name, value } = e.target;
        
        this.setState({
            [name]: value,
        });
    }

    // call back function
    onFormSubmit = e => {

        e.preventDefault();

        const { emailLogin, passwordLogin } = this.state;
        console.log(emailLogin, passwordLogin);

        if (emailLogin && passwordLogin){
            this.props.login(emailLogin, passwordLogin);
        }

    }

    toggleShow = () => {
        this.setState({ hidden: !this.state.hidden });
    }

    render() {
        const { emailLogin, passwordLogin, hidden, isauthenticated } = this.state;
        let user = JSON.parse(localStorage.getItem('user'));
        if (user){
            if(user.id.substring(0,1) == "a") {
                return (
                    <Redirect to='/admin' />
                );
            }else{
                    return (
                        <Redirect to='/content' />
                    );
            }
        }
        return (
            <div>
                <div className="margin-top">
                    <h1 className="login">Sign in</h1>
                    <div className="ui container1">
                        <form id="form" className="ui form">
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
                                        onBlur={this.onInputChange}
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
                                        onBlur={this.onInputChange}
                                        placeholder="Password" 
                                        minLength="8"
                                        required
                                    />
                                </div>   
                            </div>
                            <div>
                                <div className="form-check">
                                    <input type="checkbox" onClick={this.toggleShow} className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">show password</label>
                                </div>
                                <button className="ui button" type="button" onClick={this.onFormSubmit}>
                                    <Link to="/content">Sign in</Link>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};


function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

export default connect(mapState, actionCreators)(Login);