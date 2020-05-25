import React, { Component } from "react";
import {Form, Button, Col} from 'react-bootstrap';
import { AUS_STATES } from '../../../_constants';
import { adminActions } from '../../../_actions';

class UserProfile extends Component{

    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            target_user: this.props.target_user
        }
    }

    reset = () => {
        this.setState({
            target_user: this.props.target_user
        });
    }

    updateUser = async () => {
        await adminActions.updateUserProfile(this.state.target_user);
    }

    onInputChange = async (e, symbol) => {
        e.preventDefault();
        this.setState({ 
            target_user: {
                id: this.state.target_user.id,
                name: symbol==='name'?e.target.value:this.state.target_user.name,
                email: symbol==='email'?e.target.value:this.state.target_user.email,
                phone: symbol==='phone'?e.target.value:this.state.target_user.phone,
                addressStreet: symbol==='street'?e.target.value:this.state.target_user.addressStreet,
                addressSurburb: symbol==='suburb'?e.target.value:this.state.target_user.addressSurburb,
                addressPostcode: symbol==='postcode'?e.target.value:this.state.target_user.addressPostcode,
                addressState: symbol==='state'?e.target.value:this.state.target_user.addressState 
            }
        });
    }

    render(){
        return(
            <div>
                <div>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="user_id">
                                <Form.Label>Car ID:</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={this.state.target_user.id} 
                                    disabled
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="user_name">
                                <Form.Label>Name: </Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={this.state.target_user.name} 
                                    disabled
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="user_email">
                                <Form.Label>Email: </Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={this.state.target_user.email} 
                                    disabled
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="user_phone">
                                <Form.Label>Phone:</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={this.state.target_user.phone} 
                                    onChange={(e)=> this.onInputChange(e, 'phone')}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="user_street">
                                <Form.Label>Street: </Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={this.state.target_user.addressStreet} 
                                    onChange={(e)=> this.onInputChange(e, 'street')}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="user_suburb">
                                <Form.Label>Suburb: </Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={this.state.target_user.addressSurburb} 
                                    onChange={(e)=> this.onInputChange(e, 'suburb')}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="user_postcode">
                                <Form.Label>Postcode:</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={this.state.target_user.addressPostcode} 
                                    onChange={(e)=> this.onInputChange(e, 'postcode')}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="user_state">
                                <Form.Label>State: </Form.Label>
                                <div>
                                    <select onChange={(e)=> this.onInputChange(e, 'state')}>
                                        {AUS_STATES.map((option) => <option selected={option === this.state.target_user.addressState} value={option}>{option}</option>)}
                                    </select>
                                </div>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </div>
                <div style={{textAlign:"right"}}>
                    <Button className="menu-button" variant="success" type="button" onClick={this.updateUser}>
                        Update
                    </Button>
                    &nbsp;&nbsp;
                    <Button className="menu-button" variant="info" type="button" onClick={this.reset}>
                        Reset
                    </Button>
                </div>
            </div>
        );
    }
}

export default UserProfile;