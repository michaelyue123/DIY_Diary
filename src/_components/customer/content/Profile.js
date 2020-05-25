import React, { Component } from 'react'
import '../../styles/customer/Profile.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userConstants } from '../../../_constants/';
import { AUS_STATES, MELBOURNE_SUBURB } from '../../../_constants';
import { alertActions } from '../../../_actions';

class Profile extends Component {

    state = {
        id: this.props.user.id,
        name: this.props.user.name,
        email: this.props.user.email,
        phone: this.props.user.phone,
        addressStreet: this.props.user.addressStreet,
        addressSurburb: this.props.user.addressSurburb,
        addressPostcode: this.props.user.addressPostcode,
        addressState: this.props.user.addressState
    }

    onInputChange = async (e, symbol) => {
        e.preventDefault();
        await this.setState({ 
            id: this.state.id,
            name: symbol==='name'?e.target.value:this.state.name,
            email: symbol==='email'?e.target.value:this.state.email,
            phone: symbol==='phone'?e.target.value:this.state.phone,
            addressStreet: symbol==='street'?e.target.value:this.state.addressStreet,
            addressSurburb: symbol==='suburb'?e.target.value:this.state.addressSurburb,
            addressPostcode: symbol==='postcode'?e.target.value:this.state.addressPostcode,
            addressState: symbol==='state'?e.target.value:this.state.addressState 
        });
        
    }

    onSubmitUpdate = async () => {
        await this.props.updateInfo(this.state);
        alertActions.show_success("Update Successfully", "", false, 1500, null);
    }

    render() {
        return (
            <div>
                <Form className="profile form">
                    <h1 style={{textAlign: "center", fontFamily: "fantasy", fontSize: "2.5vw"}}>Edit Profile</h1>
                    <hr />
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text"
                            name="name"
                            value={this.state.name} 
                            onChange={(e)=> this.onInputChange(e, 'name')} 
                            placeholder="Name" 
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="email"
                            value={this.state.email} 
                            onChange={(e)=> this.onInputChange(e, 'email')} 
                            placeholder="Email" 
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="phone"
                            value={this.state.phone} 
                            onChange={(e)=> this.onInputChange(e, 'phone')} 
                            placeholder="Phone" 
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
                            id="formControl" 
                            name="street"
                            value={this.state.addressStreet} 
                            type="text" 
                            onChange={(e)=> this.onInputChange(e, 'street')} 
                            placeholder="Street " 
                        />
                        <Form.Control 
                            id="formControl" 
                            name="street"
                            value={this.state.addressSurburb} 
                            type="text" 
                            onChange={(e)=> this.onInputChange(e, 'suburb')} 
                            placeholder="Street" 
                        />
                        <Form.Control name="suburb" value={this.props.user.addressSurburb} custom="true" id="formControl" as="select" custom="true">
                            {MELBOURNE_SUBURB.map((option) => <option value={option === this.props.user.addressSurburb}>{option}</option>)}
                        </Form.Control>
                        <Form.Control 
                            id="formControl" 
                            value={this.state.addressPostcode} 
                            type="text" 
                            name="postcode"
                            onChange={(e)=> this.onInputChange(e, 'postcode')} 
                            placeholder="Postcode" 
                        />
                        <Form.Control name="state" value={this.state.addressState} onChange={(e)=> this.onInputChange(e, 'state')}  id="formControl" as="select" custom="true">
                            {AUS_STATES.map((option) => <option value={option}>{option}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Button className="ui button" id="profile" type="button" onClick={this.onSubmitUpdate}>
                        <Link to="/content">
                            <span id="update">Save</span>
                        </Link>
                    </Button>
                </Form>
            </div>
        );
    };
}


const mapStateToProps = (state) => {
    return { user: state.authentication.user };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateInfo: (user) => { dispatch({ type: userConstants.UPDATE, user })}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
