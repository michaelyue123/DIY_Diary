import React, { Component } from 'react'
import '../../styles/admin/Diary.css';
import DiaryNavButton from './DiaryNavButton';

class DiaryM extends Component{

    render(){
        return(
            <div className="text-center" >
                <DiaryNavButton action="" />
            </div>
        );
    }
}

export default DiaryM;