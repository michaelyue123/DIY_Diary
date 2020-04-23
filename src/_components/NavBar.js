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
                if(this.props && this.props.user && this.props.user.id
                    && this.props.user.id.substring(0,1) =="a") {
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
        user: state.authentication.user 
    };
}

export default connect(mapStateToProps)(NavBar);
