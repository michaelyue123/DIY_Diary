import React from 'react';
import imgPath1 from '../images/admin.png';
import imgPath2 from '../images/user.png';

const RegAdmin = () => {
    return (
        <div>
            <label id="text">Choose your role: Admin or User</label>
            <div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineRadio1"><img alt="" src={imgPath1} />{' '}Administrator</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label" htmlFor="inlineRadio2"><img alt="" src={imgPath2} />{' '}User</label>
                </div>
            </div>
        </div>
    );
}

export default RegAdmin;