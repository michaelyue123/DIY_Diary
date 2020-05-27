import { API_URL } from '../_constants';
import qs from 'qs';

export const adminService = {
    updateDiaryParameters,
    deleteDiaryParameters,
    recoverDiaryParameters,
    getAllUsers,
    changeActive,
    updateUserProfile,
    download
};

async function updateDiaryParameters(userId, target, description) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: qs.stringify({ userId, target, description })
    };

    const response = await fetch(API_URL + "/diary/updateDiaryParameters", requestOptions);
    const response_1 = await handleResponse(response);
    return response_1;
}

async function deleteDiaryParameters(userId, target, diaryOptions) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, target, diaryOptions })
    };

    const response = await fetch(API_URL + "/diary/deleteDiaryParameters", requestOptions);
    const response_1 = await handleResponse(response);
    return response_1;
}

async function recoverDiaryParameters(userId, target, diaryOptions) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, target, diaryOptions })
    };

    const response = await fetch(API_URL + "/diary/recoverDiaryParameters", requestOptions);
    const response_1 = await handleResponse(response);
    return response_1;
}

async function getAllUsers(id, email, name, phone, addressStreet, addressSurburb, addressPostcode, addressState, active) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: qs.stringify({ id, email, name, phone, addressStreet, addressSurburb, addressPostcode, addressState, active })
    };

    const response = await fetch(API_URL + "/getAllUser", requestOptions);
    const response_1 = await handleResponse(response);
    return response_1;
}

async function changeActive(id, active) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: qs.stringify({ id, active })
    };

    const response = await fetch(API_URL + "/changeActive", requestOptions);
    const response_1 = await handleResponse(response);
    return response_1;
}

async function updateUserProfile(id, name, email, phone, addressStreet, addressSurburb, addressPostcode, addressState) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: qs.stringify({ id, name, email, phone, addressStreet, addressSurburb, addressPostcode, addressState })
    };

    const response = await fetch(API_URL + "/updateUserProfile", requestOptions);
    const response_1 = await handleResponse(response);
    return response_1;
}

async function download(period) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: qs.stringify({ period })
    };

    const response = await fetch(API_URL + "/order/download", requestOptions);
    // const response_1 = await handleResponse(response);
    return response;
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