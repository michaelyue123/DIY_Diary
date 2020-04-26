import qs from 'qs';
import { API_URL } from '../_constants';

export const orderService = {
    getOrders,
    getOrder,
    sendOrder
};


function getOrders(userId, number) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: qs.stringify({userId, number})
    };
    
    return fetch(API_URL+"/getOrderHistory", requestOptions)
        .then(handleResponse)
        .then(response => {
            let resultCode = response.resultCode;
            if (resultCode === 0){
                return response.returnObj;
            }else{
                return null;
            }
        });
}

function getOrder(userId){

}

function sendOrder(order){
    
}
