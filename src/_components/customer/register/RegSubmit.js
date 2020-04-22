import React from 'react';
import { Link } from 'react-router-dom';

const RegSubmit = ({ onClick }) => {
    return (
        <div>
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
                <button type="submit" className="ui button" href="/Login">Register</button>
            </div>

            <div className="container signin">
                <p id="text">Already have an account? <Link to="/Login">Sign in</Link></p>
            </div>
        </div>
    );
}

export default RegSubmit;