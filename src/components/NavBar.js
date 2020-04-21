import React from 'react';
import './styles/Navbar.css';
import { Route } from 'react-router-dom';
import CustomerNavbar from './CustomerNavbar';
import AdminNavbar from './AdminNavbar';


const NavBar = ({ component: Component, ...rest }) =>  {

    return (
        <Route {...rest} render={(props) => {
            if(false) {
                return <CustomerNavbar {...props} />;
            }else {
                return <AdminNavbar {...props} />;
            }
        }}/>
    );

}

export default NavBar;

