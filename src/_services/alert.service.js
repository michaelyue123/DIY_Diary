import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

export const alertService = {
    success,
    error,
    info
};

function success(title, message, showConfirmButton, timer) {
    MySwal.fire({
        position: 'top-center',
        icon: 'success',
        title: title,
        text: message,
        showConfirmButton: showConfirmButton,
        timer: timer===0?999999:timer,
    });
}

function error(title, message) {
    MySwal.fire({
        icon: 'error',
        title: title,
        text: message,
    });
}

function info(title, message) {
    MySwal.fire({
        icon: 'info',
        title: title,
        text: message,
    });
}