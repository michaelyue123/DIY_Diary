import { alertConstants } from '../_constants';

export const alertActions = {
    success,
    error,
    info,
    clear,
    show_success,
    show_error,
    show_info
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

function show_success(title, message, showConfirmButton, timer){
    alertActions.success(title, message, showConfirmButton, timer);
}
function show_error(title, message){
    alertActions.error(title, message);
}
function show_info(title, message){
    alertActions.info(title, message);
}