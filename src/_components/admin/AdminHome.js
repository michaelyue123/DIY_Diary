import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import '../styles/admin/AdminHome.css';
import OrderTable from '../common/OrderTable';


class AdminHome extends Component {


    render() {
        return (
            <>
                <div>
                    <h1 className="content text-center">Admin Homepage</h1>
                    <div className="content" id="orderListDiv">
                        <div>
                            <OrderTable count={-1}/>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default AdminHome;