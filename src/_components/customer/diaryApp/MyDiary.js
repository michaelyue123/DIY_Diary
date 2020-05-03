import React, { Component } from 'react';
import '../../styles/customer/Diary/MyDiary.css';
// import { history } from '../../../_helpers/history';

class MyDiary extends Component {

    render() {
        return (
            <div>
                <div onClick={() => this.props.history.push('/diaryContent')} className="app container">
                    <h1 className="diary title">diary</h1>
                </div>
            </div>
        )
    }
}

export default MyDiary;
