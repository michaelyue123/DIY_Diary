import React, { Component } from 'react';
import '../styles/Register.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import RegAdmin from './RegAdmin';
import RegUser from './RegUser';
import RegSubmit from './RegSubmit';
import { validateForm, validEmailRegex } from './RegValidate';
import Tabs from "./tabs/Tabs";
import glamorous from "glamorous";
// import axios from 'axios';


const MySwal = withReactContent(Swal);

class Register extends Component {
  
    state = {
        userId: '',
        email: '',
        password: '',
        confirmPassword: '',
        checked: false,
        errors: {
            email: '',
            password: '',
            confirmPassword: '',
        },
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

    onClick = () => this.setState({ checked: !this.state.checked });

    onFormSubmit = async (e) => {
        e.preventDefault();
        const { email, password, confirmPassword, checked, errors } = this.state;

        console.log(this.state);

        if(email !== '' && password !== '' && confirmPassword !== '') {
            if(validateForm(errors)) {
                if(checked !== false) {
                    MySwal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your registration is successful!',
                        showConfirmButton: false,
                        timer: 1000,
                    });
                    this.setState({
                        userId: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                        checked: false,
                        errors: {
                            email: '',
                            password: '',
                            confirmPassword: '',
                        },
                    });
                }else {
                    MySwal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please make sure you\'ve checked the box!',
                    });
                }
            }else {
                MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please make sure details you\'ve entered are correct!',
                });
            }
        }else {
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all required details above!',
            });
        }
    }

    render() {
        const { errors } = this.state;

        return (
            <div>
                <h1 className="ui dividing header" id="register">Register</h1>
                <div className="ui container">
                    <Tabs
                        activeTab={{
                            id: "tab1"
                        }}
                    >
                        <Tabs.Tab onClick={this.onClickMonitor} id="tab1" title="Admin">
                            <glamorous.Div padding={5}>
                                <form onSubmit={this.onFormSubmit} noValidate className="ui form">
                                    <RegAdmin 
                                        errors={errors} 
                                        onInputChange={this.onInputChange} 
                                    />
                                    <RegSubmit onClick={this.onClick}/>
                                </form>
                            </glamorous.Div>
                        </Tabs.Tab>
                        <Tabs.Tab onClick={this.onClickMonitor} id="tab2" title="User">
                            <glamorous.Div padding={5}>
                                <form onSubmit={this.onFormSubmit} noValidate className="ui form">
                                    <RegUser 
                                        errors={errors} 
                                        onInputChange={this.onInputChange}
                                    />
                                    <RegSubmit  onClick={this.onClick}/>
                                </form>
                            </glamorous.Div>
                        </Tabs.Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default Register;
