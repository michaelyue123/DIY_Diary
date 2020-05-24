import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';


export const userActions = {
    login,
    logout,
    register
};

function login(email, password) {
    return dispatch => {

        userService.login(email, password)
            .then(
                user => { 
                    if (user){

                        let role = 2;
                        if(user.id.substring(0,1) === "a"){
                            role = 1;
                        }

                        dispatch(success(user, role));
                        dispatch(alertActions.success("Login is successful.","", true, 1500));
                        if(role === 1){
                            history.push('/admin');
                        }else{
                            history.push('/content');
                        }
                        
                    }else{
                        dispatch(alertActions.error("Login failed","Please check your email and password."));
                    }
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    // function request(email) { return { type: userConstants.LOGIN_REQUEST, email } }
    function success(user, role) { return { type: userConstants.LOGIN_SUCCESS, user, role } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    return dispatch => {
        dispatch(success());
        dispatch(alertActions.success("Logout is successful.","", true, 1000));
        history.push('/'); 
    }
    function success() { return { type: userConstants.LOGOUT };}  
}

function register(role, name, email, password) {
    return dispatch => {

        userService.register(role, name, email, password)
            .then(
                user => { 

                    if (user){

                        let role = 2;
                        if(user.id.substring(0,1) === "a"){
                            role = 1;
                        }

                        dispatch(success(user, role));
                        
                        if(role === 1){
                            dispatch(alertActions.success("Add admin successful.","", true, 0));
                        }else{
                            dispatch(alertActions.success("Registration successful.","", true, 0));
                            history.push('/content');
                        }
                    }else{
                        dispatch(alertActions.error("Login failed","Please check your email and password."));
                    }
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    // function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user, role) { return { type: userConstants.REGISTER_SUCCESS, user, role } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}
