import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import fakeAuth from './customer/login/fakeAuth';


const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (

        <Route {...rest} render={props => (
            localStorage.getItem('user')
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )} />
    );
}

export default ProtectedRoute;
