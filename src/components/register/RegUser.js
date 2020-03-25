import React from 'react';
import CommonReg from './CommonReg';
import imgPath2 from '../images/user.png';

const RegUser = ({ errors, onInputChange }) => {
    return (
        <div>
            <div className="form-check form-check-inline">
                <label className="form-check-label2" htmlFor="inlineRadio2"><img alt="" src={imgPath2}/>{' '}User</label>
            </div>
            <CommonReg 
                errors={errors} 
                onInputChange={onInputChange} 
            />
        </div>
    );
}

export default RegUser;