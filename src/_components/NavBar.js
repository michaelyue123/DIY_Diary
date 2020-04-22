import React, { Component } from 'react';
import './styles/Navbar.css';
import { Route, withRouter } from 'react-router-dom';
import CustomerNavbar from './customer/CustomerNavbar';
import AdminNavbar from './admin/AdminNavbar';
import { connect } from 'react-redux';


class NavBar extends Component  {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Route render={(props) => {
                console.log(this.props);
                if(this.props && this.props.authentication  && this.props.authentication.user
                    && this.props.authentication.user.id.substring(0,1) =="a") {
                    return <AdminNavbar {...props} />;
                }else {
                    return <CustomerNavbar {...props} />;
                }
            }}/>
        
        );
    }
        

}

function mapState(state) {
    return { authentication: state.authentication };
}

export default connect(mapState)(NavBar);

