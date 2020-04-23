import qs from 'qs';


const API_URL = "https://panda-diary.herokuapp.com";

export const userService = {
    login,
    logout,
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

            let user = response.returnObj;
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            
            let userId = user.id;
            let role = 2;
            if (userId.substring(0,1) === 'a'){
                role = 1;
            }
            localStorage.setItem('role', role);

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: JSON.stringify(user)
    };

    return fetch(API_URL+"/users/authenticate", requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: JSON.stringify(user)
    };

    return fetch(API_URL+"/users/authenticate", requestOptions).then(handleResponse);;
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}