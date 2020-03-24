import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Register.css';

const CommonReg = ({ errors, onInputChange, onClick }) => {
    return (
        <div>
             <div className="field">
                <label htmlFor="email" id="text">Email</label>
                <div className="ui input">
                    <input
                        type="email"
                        onChange={onInputChange}
                        name="email"
                        placeholder='Email'
                        required
                    />
                 </div>
                {errors.email.length > 0 &&
                    <span className="error">{errors.email}</span>}
            </div>
            <div className="field">
                <label id="text">Password (8 characters minimum)</label>
                <input
                    type="password"
                    onChange={onInputChange}
                    name="password"
                    placeholder="password"
                    minLength="8"
                    required
                />
                {errors.password.length > 0 &&
                    <span className='error'>{errors.password}</span>}
            </div>
            <div className="field">
                <label id="text">Confirm Password</label>
                <input
                    type="password"
                    onChange={onInputChange}
                    name="confirmPassword"
                    placeholder="Confirm password"
                    minLength="8"
                    required
                />
                {errors.confirmPassword.length > 0 &&
                    <span className="error">{errors.confirmPassword}</span>}
            </div>
            <div className="form-check">
                <p id="text">
                    <input
                        type="checkbox"
                        name="terms"
                        className="form-check-input"
                        onClick={onClick}
                        required
                    />
                    By creating an account you agree to our <span>Terms & Privacy</span>.
                </p>
                <p id="sudo"></p>
                <button type="submit" className="ui button" href="/Login">Register</button>
            </div>

            <div className="container signin">
                <p id="text">Already have an account? <Link to="/Login">Sign in</Link>.</p>
            </div>
        </div>
    )       
}

export default CommonReg;



