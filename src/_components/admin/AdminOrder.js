import '../styles/admin/AdminHome.css';
import OrderTable from '../common/OrderTable';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminOrder extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1 className="content text-center">Admin Homepage-{this.props.authentication}</h1>
                <div className="content" id="orderListDiv">
                    <div>
                        <OrderTable count={-1}/>
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.authentication
})

export default connect(mapStateToProps)(AdminOrder);