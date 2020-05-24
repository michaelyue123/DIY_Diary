import React, { Component } from 'react'
import { connect } from 'react-redux';
import { adminActions, userActions, alertActions } from '../../../_actions';
import '../../styles/admin/UserDetails.css';
import OrderTable from '../../common/OrderTable';
import UserProfile from './UserProfile';

class UserDetails extends Component{

    constructor(props){
        super(props);
        this.state = {
            target_user: this.props.target_user
        }
    }

    render(){
        return(
            <div>
                <div>
                    <div className="text-center">
                        <h1 id="user_header"> {this.state.target_user.name}'s Profile.</h1>
                    </div>
                    <div className="content profile" id="orderListDiv">
                        <UserProfile target_user={this.state.target_user} />
                    </div>
                    <div className="content" id="orderListDiv">
                        <OrderTable count={999} search_user={this.state.target_user}/>
                    </div>
                </div>
            </div>
        );
    };

}

const actionCreators = {
    register: userActions.register,
    waringAlert: alertActions.error,
};

const mapStateToProps = (state) => {
    return{
        user: state.authentication.user,
        role: state.authentication.role,
        target_user: state.editProfileReducer.target_user
    };
}

export default connect(mapStateToProps, actionCreators)(UserDetails);