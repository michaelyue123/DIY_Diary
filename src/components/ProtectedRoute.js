import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import fakeAuth from './login/fakeAuth';


const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => {
            if(fakeAuth.isAuthenticated === true) {
                return <Component {...props} />;
            }else {
                return <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />;
            }
        }}/>
    );
}

export default ProtectedRoute;
