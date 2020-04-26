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

    return fetch(API_URL+"/login", requestOptions)
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

function register(role, name, email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: qs.stringify({role, name, email, password})
    };
    
    return fetch(API_URL+"/register", requestOptions)
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

function update(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: qs.stringify(user)
    };

    return fetch(API_URL+"/users/authenticate", requestOptions).then(handleResponse);;
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