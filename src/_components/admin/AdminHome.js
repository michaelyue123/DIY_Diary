import React, { Component } from 'react'
import '../styles/admin/AdminHome.css';
import OrderTable from '../common/OrderTable';


class AdminHome extends Component {

    

    render() {
        let search_user={};
        return (
            <>
                <div>
                    <h1 className="content text-center">Admin Homepage</h1>
                    <div className="content" id="orderListDiv">
                        <div>
                            <OrderTable count={-1} search_user={search_user}/>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default AdminHome;