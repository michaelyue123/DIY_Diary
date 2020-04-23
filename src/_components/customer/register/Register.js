import React, { Component } from 'react';
import '../../styles/Register.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
// import RegAdmin from './RegAdmin';
import RegUser from './RegUser';
import RegSubmit from './RegSubmit';
import { validateForm, validEmailRegex, validUsernameRegex } from './RegValidate';
import Tabs from "./tabs/Tabs";
import glamorous from "glamorous";
import diaryImage from '../../images/2.jpg';
import axios from 'axios';
import qs from 'qs';


const MySwal = withReactContent(Swal);

class Register extends Component {
  
    state = {
        role: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        checked: false,
        errors: {
            username: '',
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
            case 'username':
                errors.username = validUsernameRegex.test(value)
                    ? ''
                    : 'Please enter alphabetical character with first letter uppercase!';
                break;
            default:
                break;
            }
            await this.setState({ errors, [name]: value });
        }

    onClick = () => this.setState({ checked: !this.state.checked });

    // pass data from child to parent
    onRoleChange = async (childRole) => {
        await this.setState({ role: childRole });
    }

    onFormSubmit = async (e) => {
        e.preventDefault();
        const { email, password, confirmPassword, username, checked, errors, role} = this.state;

        if(email !== '' && password !== '' && confirmPassword !== '' && username !== '') {
            if(validateForm(errors)) {
                if(checked !== false) {
                    MySwal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your registration is successful!',
                        showConfirmButton: false,
                        timer: 1000,
                    });
                    setTimeout(function() {
                        window.location.reload();
                    }, 1500);  

                    this.setState({
                        username: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                        checked: false,
                        errors: {
                            email: '',
                            password: '',
                            username: '',
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
        const requestBody = {
            role: role,
            name: username,
            email: email, 
            password: password,
        }
        const apiUrl = 'https://panda-diary.herokuapp.com/register';

        axios({
            method: 'POST',
            url: apiUrl,
            data: qs.stringify(requestBody),
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            }
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error)
        }); 
    }

    render() {
        const { errors } = this.state;

        return (
            <div>
                <h1 className="ui dividing header" id="register">Register</h1>
                <div className="ui container">
                    <Tabs
                        activeTab={{
                            id: "0"
                        }}
                        onRoleChange={this.onRoleChange}
                    >
                        <Tabs.Tab id="0" title="Intro">
                            <glamorous.Div>
                            <div className="hvrbox">
                                <img src={diaryImage} alt="diary" className="hvrbox-layer_bottom" />
                                <div className="hvrbox-layer_top">
                                    <div className="hvrbox-text">
                                        This intro page helps you get familiar with this app. 
                                        Before using it, you need to register as an User.
                                    </div>
                                </div>
                            </div>
                            </glamorous.Div>
                        </Tabs.Tab>
                        {/* <Tabs.Tab id="1" title="Admin">
                            <glamorous.Div padding={5}>
                                <form onSubmit={this.onFormSubmit} noValidate className="ui form">
                                    <RegAdmin 
                                        errors={errors} 
                                        onInputChange={this.onInputChange} 
                                    />
                                    <RegSubmit onClick={this.onClick}/>
                                </form>
                            </glamorous.Div>
                        </Tabs.Tab> */}
                        <Tabs.Tab id="2" title="User">
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
