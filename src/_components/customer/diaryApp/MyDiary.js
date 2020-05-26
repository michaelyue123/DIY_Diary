import React, { Component } from 'react';
import '../../styles/customer/Diary/MyDiary.css';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { diaryConstants } from '../../../_constants/diary.constants';

class MyDiary extends Component {

    state = {
        hasChoose: false,
        title: this.props.shoppingcart.title_on_cover,
        color: this.props.shoppingcart.cover_color
    }

    onInputChange = async (e, symbol) => {
        e.preventDefault();
        await this.setState({ 
            title: symbol === 'title' ? e.target.value:this.state.title,     
        });    
    }


    render() {
        const { hasChoose, title, color } = this.state;
        
        return (
            <div>
                <div style={{ backgroundColor: color}} className="app container">
                    <h1 className="diary title">{title}</h1>
                </div>
                <div className="flex-container">
                    <div onClick={() => this.setState({color: 'lightyellow'})} style={{backgroundColor: 'lightyellow'}}></div>
                    <div onClick={() => this.setState({color: 'lightgreen'})} style={{backgroundColor: 'lightgreen'}}></div>
                    <div onClick={() => this.setState({color: 'skyblue'})} style={{backgroundColor: 'skyblue'}}></div>
                    <div onClick={() => this.setState({color: 'red'})} style={{backgroundColor: 'red'}}></div>
                    <div onClick={() => this.setState({color: 'black'})} style={{backgroundColor: 'black'}}></div>
                    <div onClick={() => this.setState({color: 'orange'})} style={{backgroundColor: 'orange'}}></div>
                    <div onClick={() => this.setState({color: 'grey'})} style={{backgroundColor: 'grey'}}></div>
                    <div onClick={() => this.setState({color: 'pink'})} style={{backgroundColor: 'pink'}}></div>
                </div>
                <div className="text box">
                    <Form.Control 
                        id="formControl"
                        className="cover text" 
                        type="text" 
                        placeholder="text on the cover"
                        onChange={(e)=> this.onInputChange(e, 'title')} 
                    />
                </div>
                <Button onClick={() => this.props.history.push('/diaryContent')} className="ui button" id="personal" type="submit">
                    Next
                </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shoppingcart: state.shoppingcart.diarysettings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateInfo: (diary) => { dispatch({ type: diaryConstants.UPDATE_COVER, diary })}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDiary);
