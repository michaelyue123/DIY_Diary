import { alertConstants } from '../_constants';

export const alertActions = {
    success,
    error,
    info,
    clear
};

function success(title, message, showConfirmButton, timer) {
    return { type: alertConstants.SUCCESS, title, message, showConfirmButton, timer};
}

function error(title, message) {
    return { type: alertConstants.ERROR, title, message };
}

function info(title, message) {
    return { type: alertConstants.INFO, title, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}