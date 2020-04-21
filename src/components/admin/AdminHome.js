import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import '../styles/admin/AdminHome.css';


class AdminHome extends Component {
    render() {
        return (
            <div class="text-center">
                <h1 id="content">Admin Homepage</h1>
            </div>
        );
    }
}

export default AdminHome;