import React, { Component } from 'react'
import '../../styles/customer/Diary/DiaryContent.css';
import { FormControl, InputGroup, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export class DiaryContent extends Component {
    
    render() {
        return (
            <div >
                <div className="diary content">
                    <InputGroup className="mb-3">
                        <FormControl
                            className="inputbox"
                            placeholder="Entry Title"
                            aria-label="Title"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    
                    <Form.Control className="textbox" placeholder="Your entry here" as="textarea" rows="17" />
                    <div className="content button">
                        <Button onClick={() => this.props.history.push('/payment')} className="ui button" id="personal" type="submit">
                            Submit
                        </Button>
                        <Button onClick={() => this.props.history.push('/myDiary')} className="ui button" id="personal" type="submit">
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DiaryContent
