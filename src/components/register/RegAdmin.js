import React from 'react';
import imgPath1 from '../images/admin.png';
import CommonReg from './CommonReg';

const RegAdmin = ({ errors, onInputChange }) => {
    return (
        <div>
            <div className="form-check form-check-inline">
                <label className="form-check-label1" htmlFor="inlineRadio1"><img alt="" src={imgPath1} />{' '}Administrator</label>
            </div>
             <CommonReg 
                errors={errors} 
                onInputChange={onInputChange} 
            />
        </div>
    );
}

export default RegAdmin;