import React, { Component } from 'react'
import '../../styles/admin/DiaryNavButton.css';
import DiaryNavButton from './DiaryNavButton';

class OrderOperation extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="text-center" >
                <div>
                    <DiaryNavButton action="orders"/>
                </div>
                <div style={{"marginTop":"2%"}}>
                    <h1 className="admin_title">Order Operation (We are still working on it.)</h1>
                </div>
            </div>
        );
    }

}

export default OrderOperation;