import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

export const alertService = {
    success,
    error
};

function success(title, message) {
    MySwal.fire({
        position: 'top-center',
        icon: 'success',
        title: title,
        text: message,
        showConfirmButton: false,
        timer: 1000,
    });
}

function error(title, message) {
    MySwal.fire({
        icon: 'error',
        title: title,
        text: message,
    });
}