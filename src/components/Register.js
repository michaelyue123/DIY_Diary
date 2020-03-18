import React from 'react';
import './styles/Register.css';
import { Link } from 'react-router-dom';
import imgPath1 from './images/admin.png';
import imgPath2 from './images/user.png';
import { Label } from 'semantic-ui-react';

class Register extends React.Component {

    state = { 
        userId: '', 
        email: '', 
        password: '',      
    };

    onInputChange = e => this.setState({[ e.target.name]: e.target.value });


    onFormSubmit = e => {
        e.preventDefault();
    }

    render() { 
        return (            
            <div>
                <h1 className="ui dividing header" id="register">Register</h1>
                <div className="ui segment" id="container">
                    <form className="ui form">
                        <label id="text">Choose your role: Admin or User</label>
                        <div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label class="form-check-label" for="inlineRadio1"><img alt="" src={imgPath1} />{' '}Administrator</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label class="form-check-label" for="inlineRadio2"><img alt="" src={imgPath2} />{' '}User</label>
                            </div>
                        </div>
                        <div className="field">                     
                            <label id="text">User Id (Admin starts with A/User starts with C)</label>
                            <div className="input-group input-group-lg col-md-16 margin-bottom-sm">
                                <Label className="ui red pointing below basic label">Input needs to be one letter (A or C) followed by 3 numbers</Label>
                                <div className="ui input">
                                    <input type="userId" 
                                    onChange={this.onInputChange} 
                                    pattern="[AC0-9]{4}" 
                                    name="userId 
                                    "id="userId"  
                                    placeholder='UserId'
                                    required />
                                </div>
                           </div>
                        </div>    
                        <div className="field">
                            <label id="text">Password (8 characters minimum)</label>
                            <input type="password" onChange={this.onInputChange} id="pass" name="password" placeholder="password" minLength="8" required/>
                        </div>
                        <div className="field">
                            <label id="text">Confirm Password</label>
                            <input type="password" onChange={this.onInputChange} id="pass" name="password" placeholder="Confirm password" required/>
                        </div>
                        <div className="form-check">
                            <p id="text">
                                <input type="checkbox" 
                                name="terms" 
                                className="form-check-input" 
                                id="exampleCheck1" 
                                />
                                By creating an account you agree to our <span>Terms & Privacy</span>.
                            </p>
                            <button onSubmit={this.onFormSubmit} type="submit" className="ui button" href="/Login">Register</button>
                        </div>

                        <div className="container signin">
                            <p id="text">Already have an account? <Link to="/Login">Sign in</Link>.</p>
                        </div>             
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;