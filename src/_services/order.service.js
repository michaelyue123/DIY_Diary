import qs from 'qs';
import { API_URL } from '../_constants';

export const orderService = {
    getOrders,
    getOrder,
    sendOrder
};


async function getOrders(userId, number) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: qs.stringify({userId, number})
    };
    
    const response = await fetch(API_URL + "/order/getOrderHistory", requestOptions);
    const response_1 = await handleResponse(response);
    let resultCode = response_1.resultCode;
    if (resultCode === 0) {
        return response_1.returnObj;
    }
    else {
        return null;
    }
}

function getOrder(userId){

}

async function sendOrder(order){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: qs.stringify(order)
    };

    const response = await fetch(API_URL + "/order/send", requestOptions);
    const response_1 = await handleResponse(response);
    let resultCode = response_1.resultCode;
    if (resultCode === 0) {
        return response_1.returnObj;
    }
    else {
        return null;
    }
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
