import React from 'react';
import CommonReg from './CommonReg';

const RegUser = ({ errors, onInputChange, onClick }) => {
    return (
        <CommonReg 
            errors={errors} 
            onInputChange={onInputChange} 
            onClick={onClick} 
        />
    );
}

export default RegUser;