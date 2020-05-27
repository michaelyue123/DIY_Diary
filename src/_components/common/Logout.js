import React, { Component } from 'react';
import '../styles/Logout.css';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

class Logout extends Component{

    logout = () => {
        this.props.logout();
    }

    render(){
            return(
                <div className="form-inline" id = "logout">
                    <button className="ui button" type="button" onClick={this.logout}>
                        Log Out
                    </button>
                </div>
            );
    }

}


const actionCreators = {
    logout: userActions.logout
};

function mapStateToProps(state) {
    const { authentication } = state.authentication;
    return { authentication };
}

export default connect(mapStateToProps, actionCreators)(Logout);