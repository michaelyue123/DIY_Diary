import qs from 'qs';
import { API_URL } from '../_constants';

export const userService = {
    login,
    register,
    update
};

async function login(email, password) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: qs.stringify({ email, password })
    };

    const response = await fetch(API_URL + "/login", requestOptions);
    const response_1 = await handleResponse(response);
    let resultCode = response_1.resultCode;
    if (resultCode === 0) {
        return response_1.returnObj;
    }
    else {
        return null;
    }
}

async function register(role, name, email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: qs.stringify({role, name, email, password})
    };
    
    console.log(requestOptions);
    const response = await fetch(API_URL + "/register", requestOptions);
    const response_1 = await handleResponse(response);
    let resultCode = response_1.resultCode;
    if (resultCode === 0) {
        return response_1.returnObj;
    }
    else {
        return null;
    }
}

async function update(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: qs.stringify(user)
    };

    const response = await fetch(API_URL + "/users/authenticate", requestOptions);
    return handleResponse(response);;
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