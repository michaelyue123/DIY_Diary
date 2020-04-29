import { API_URL } from '../_constants';

export const commonService = {
    getDeliveryOptions,
    getPaymentOptions
};

async function getDeliveryOptions() {
    console.log("Common Service");
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };

    const response = await fetch(API_URL + "/order/getDeliveryOptions", requestOptions);
    const response_1 = await handleResponse(response);
    let resultCode = response_1.resultCode;
    if (resultCode === 0) {
        return response_1.returnObj;
    }
    else {
        return null;
    }
}

async function getPaymentOptions() {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };

    const response = await fetch(API_URL + "/order/getPurchaseOptions", requestOptions);
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