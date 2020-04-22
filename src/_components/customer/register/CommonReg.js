import React from 'react';
import '../../styles/Register.css';

const CommonReg = ({ errors, onInputChange }) => {
    return (
        <div>
            <div className="field">
                <label htmlFor="username" id="text">Username</label>
                <div className="ui input">
                    <input
                        type="text"
                        onChange={onInputChange}
                        name="username"
                        placeholder='Username'
                        required
                    />
                 </div>
                {errors.username.length > 0 &&
                    <span className="error">{errors.username}</span>}
            </div>
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
        </div>
    )       
}

export default CommonReg;



