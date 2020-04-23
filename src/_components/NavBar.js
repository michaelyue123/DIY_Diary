import React, { Component } from 'react';
import './styles/Navbar.css';
import { Route } from 'react-router-dom';
import CustomerNavbar from './customer/CustomerNavbar';
import AdminNavbar from './admin/AdminNavbar';
import { connect } from 'react-redux';


class NavBar extends Component  {

    render(){
        return (
            <Route render={(props) => {
                if(this.props && this.props.role && this.props.role === 1) {
                    return <AdminNavbar {...props} />;
                }else {
                    return <CustomerNavbar {...props} />;
                }
            }}/>
        
        );
    }
}

const mapStateToProps = (state) =>{
    return { 
        user: state.authentication.user, 
        role: state.authentication.role
    };
}

export default connect(mapStateToProps)(NavBar);
