import Cards from '../../../_images/credit-cards.png'
import PayPal from '../../../_images/paypal.png'
import React from 'react';
import '../../styles/customer/payment/PayImg.css';

export const PayImg = () =>{
    return (
        <div>
            <img src={Cards} className="payment_img" />
            <img src={PayPal} className="payment_img" />
        </div>
    );
}