import React, { Component } from 'react'
import '../../styles/admin/Report.css';
import { Button, Form, Col } from 'react-bootstrap';
import { adminActions, userActions, alertActions } from '../../../_actions';

class Report extends Component{

    constructor(props){
        super(props);

        this.state = {
            period: [
                {"idx": 0, "name": "Weekly"},
                {"idx": 1, "name": "Monthly"}
            ],
            selected: 0
        }
    }

    download = () => {
        adminActions.download(this.state.selected)
    }

    onInputChange = (e) => {
        this.setState({ 
            selected: e.target.value
        });
    }

    render(){
        return(
            <div className="text-center">
                <div style = {{marginTop:"2%"}}>
                    <h1 id="content">Download Report</h1>
                </div>
                <div id="content" style = {{marginTop:"5%"}}>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="period1">
                            </Form.Group>
                            <Form.Group as={Col} md="2" controlId="period">
                                <Form.Label style={{color:"white"}}><h3>Period: </h3></Form.Label>
                                <div style={{display:"inline", marginLeft:"3%"}}>
                                    <select onChange={this.onInputChange}>
                                        {this.state.period.map((option) => <option selected={option.idx === this.state.selected} value={option.idx}>{option.name}</option>)}
                                    </select>
                                </div>
                            </Form.Group>
                            <Form.Group as={Col} md="1" controlId="download_btn">
                                <Button variant="success" style={{"cursor":"pointer"}} onClick={()=>{this.download()}}>Download</Button>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="period2">
                            </Form.Group>
                        </Form.Row>
                       
                    </Form>
                </div>
            </div>
        );
    }
}

export default Report;