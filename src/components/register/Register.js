import React, { Component } from 'react';
import '../styles/Register.css';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import RegAdmin from './RegAdmin';
import RegUser from './RegUser';
import { Tabs, Tab } from 'react-bootstrap';
import RegSubmit from './RegSubmit';


const validEmailRegex =
    RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

// const validUserIdRegex = RegExp(/^[A|C][0-9]{3}$/);

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 &&
            (valid = false)
    );
    return valid;
}

class Register extends Component {
  
    state = {
        userId: null,
        email: null,
        password: null,
        confirmPassword: null,
        checked: false,
        errors: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        title: [
            'Admin',
            'User'
        ]
    };
    
    onInputChange = async (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let errors = this.state.errors;

        switch (name) {
            case 'email':
                errors.email = validEmailRegex.test(value)
                    ? ''
                    : 'Email is not valid';
                break;
            case 'password':
                errors.password = value.length < 8
                    ? 'Password must be 8 characters long!'
                    : '';
                break;
            case 'confirmPassword':
                errors.confirmPassword = value !== this.state.password
                    ? 'Password entered is inconsistent with previous input!'
                    : '';
                break;
            default:
                break;
        }
        this.setState({ errors, [name]: value });
    }

    onClick = () => {
        this.setState({ checked: !this.state.checked });
    }

    onFormSubmit = async (e) => {
        e.preventDefault();
        const { email, password, confirmPassword, checked, errors, userId } = this.state;

        if(email !== null && password !== null && confirmPassword !== null) {
            if(validateForm(errors)) {
                if(checked === false) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please make sure you\'ve checked the box!',
                    });
                }else {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your registration is successful!',
                        showConfirmButton: false,
                        timer: 2000,
                    });
                    this.setState({
                        userId: null,
                        email: null,
                        password: null,
                        confirmPassword: null,
                        checked: false,
                        errors: {
                            email: '',
                            password: '',
                            confirmPassword: '',
                        },
                    });
                }
            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please make sure details you\'ve entered are correct!',
                });
            }
        }else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all required details above!',
            });
        }
    }

    render() {
        const { errors, title } = this.state;

        return (
            <div>
                <h1 className="ui dividing header" id="register">Register</h1>
                <div className="ui container">
                    <Tabs defaultActiveKey="Admin" id="uncontrolled-tab">
                        <Tab eventKey="Admin" title={title[0]}>
                            <form onSubmit={this.onFormSubmit} noValidate className="ui form">
                                <RegAdmin 
                                    errors={errors} 
                                    onInputChange={this.onInputChange} 
                                />
                                <RegSubmit onClick={this.onClick}/>
                            </form>
                        </Tab>
                        <Tab eventKey="User" title={title[1]}>
                            <form onSubmit={this.onFormSubmit} noValidate className="ui form">
                                <RegUser 
                                    errors={errors} 
                                    onInputChange={this.onInputChange} 
                                />
                                <RegSubmit  onClick={this.onClick}/>
                            </form>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default Register;
