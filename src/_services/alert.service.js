import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

export const alertService = {
    success,
    error,
    info,
    warning
};

function success(title, message, showConfirmButton, timer, func) {
    MySwal.fire({
        position: 'top-center',
        icon: 'success',
        title: title,
        text: message,
        onClose: func,
        showConfirmButton: showConfirmButton,
        timer: timer===0?999999:timer,
    });
}

function error(title, message, func) {
    MySwal.fire({
        icon: 'error',
        title: title,
        onClose: func,
        text: message,
    });
}

function info(title, message, func) {
    MySwal.fire({
        icon: 'info',
        title: title,
        onClose: func,
        text: message,
    });
}

function warning(title, message, confirm_btn_text, showConfirmButton, timer, confirm_func, cancel_func) {

    MySwal.fire({
        position: 'top-center',
        title: title,
        text: message,
        icon: 'warning',
        onClose: cancel_func,
        showConfirmButton: showConfirmButton,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirm_btn_text,
        timer: timer===0?999999:timer

      }).then(confirm_func)
}