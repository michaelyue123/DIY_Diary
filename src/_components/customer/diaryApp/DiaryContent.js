import React, { Component } from 'react'
import '../../styles/customer/Diary/DiaryContent.css';
import { FormControl, InputGroup, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { diaryConstants } from '../../../_constants/diary.constants';
import { connect } from 'react-redux';



export class DiaryContent extends Component {


    state = {
        color: this.props.shoppingcart.cover_color
    }
    
    render() {
        const { color } = this.state;

        return (
            <div >
                <div style={{ backgroundColor: color}} className="diary content">
                    <InputGroup className="mb-3">
                        <FormControl
                            className="inputbox"
                            placeholder="Entry Title"
                            aria-label="Title"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    
                    <Form.Control className="textbox" placeholder="Your entry here" as="textarea" rows="13" />
                    <div>
                        <Button onClick={() => this.props.history.push('/payment')} className="ui button" id="content-button" type="submit">
                            Submit
                        </Button>
                        <Button onClick={() => this.props.history.push('/myDiary')} className="ui button" id="content-button" type="submit">
                            Cancel
                        </Button>  
                    </div>    
                </div>
                <div className="flex-container-one">
                    <div onClick={() => this.setState({color: 'white'})} style={{backgroundColor: 'white'}}></div>
                    <div onClick={() => this.setState({color: 'lightgreen'})} style={{backgroundColor: 'lightgreen'}}></div>
                    <div onClick={() => this.setState({color: 'skyblue'})} style={{backgroundColor: 'skyblue'}}></div>
                    <div onClick={() => this.setState({color: 'grey'})} style={{backgroundColor: 'grey'}}></div>
                </div>
            
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
        updateInfo: (diary) => { dispatch({ type: diaryConstants.UPDATE_CONTENT, diary })}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiaryContent);
