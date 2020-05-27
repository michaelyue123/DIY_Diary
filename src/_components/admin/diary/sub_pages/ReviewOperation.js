import React, { Component } from 'react'
import '../../../styles/admin/DiaryNavButton.css';
import DiaryNavButton from '../DiaryNavButton';

class ReviewOperation extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="text-center" >
                <div>
                    <DiaryNavButton  action="reviews"/>
                </div>
                <div style={{"marginTop":"2%"}}>
                    <h1 className="admin_title">Review Operation (We are still working on it.)</h1>
                </div>
            </div>
        );
    }

}

export default ReviewOperation;