import React, { Component } from 'react'
import '../../styles/customer/Diary/DiaryContent.css';
import { FormControl, InputGroup, Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export class DiaryContent extends Component {
    
    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };


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
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <i className="calendar check outline icon"></i>
                        <Form.Label style={{ fontSize: "1.3vw" }}>Select Date</Form.Label>
                        <DatePicker 
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            className="date"
                        />
                    </Form.Group>
                    <Form.Control className="textbox" placeholder="Your entry here" as="textarea" rows="17" />
                    <div className="content button">
                        <Button className="ui button" id="personal" type="submit">
                            <Link><span id="update">Save</span></Link>
                        </Button>
                        <Button className="ui button" id="personal" type="submit">
                            <Link><span id="update">Cancel</span></Link>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DiaryContent
