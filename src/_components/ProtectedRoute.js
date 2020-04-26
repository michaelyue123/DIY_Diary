import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const ProtectedRoute = ({ component: Component, user, ...rest }) => {
    return (
        <Route {...rest} render={props => {
            let loginUser = {user};
            console.log(loginUser);
            if (loginUser && loginUser.user && loginUser.user.id){
                return <Component {...props} />
            }else{
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
        }} />
    );
}

const mapStateToProps = (state) => {
    return{
        user: state.authentication.user
    }
}

export default withRouter(connect(mapStateToProps)(ProtectedRoute));
