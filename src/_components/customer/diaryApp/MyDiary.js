import React, { Component } from 'react';
import '../../styles/customer/Diary/MyDiary.css';

class MyDiary extends Component {

    state = {
        hasChoose: false
    }

    render() {
        const { hasChoose } = this.state;
        // let user = this.props.user;
    
        // if (!hasChoose){
        //     if (role === 1){
        //         return (
        //             <Redirect to='/admin' />
        //         );
        //     }else{
        //         return (
        //             <Redirect to='/content' />
        //         );
        //     }
        // }
        return (
            <div>
                <div onClick={() => this.props.history.push('/diaryContent')} className="app container">
                    <h1 className="diary title">diary</h1>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shoppingcart: state.shoppingcart.diarysettings,
    }
}

export default MyDiary;
