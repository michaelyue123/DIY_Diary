import React, { Component } from 'react'
import '../../styles/customer/Profile.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userConstants } from '../../../_constants/';
import { AUS_STATES, MELBOURNE_SUBURB } from '../../../_constants';

class Profile extends Component {


    state = {
        name: this.props.user.name,
        email: '',
        phone: '',
        street: '',
        suburb: '',
        postcode: '',
        ausState: ''
    }

    onInputChange = async (e) => {
        e.preventDefault();
        await this.setState({ name: e.target.value });

        this.props.changeName(this.state.name);
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
                            onChange={this.onInputChange} 
                            placeholder="Name" 
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="email"
                            value={this.props.user.email} 
                            onChange={this.onInputChange} 
                            placeholder="Email" 
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="phone"
                            value={this.props.user.phone} 
                            onChange={(e) => this.props.changeEmail(e.target.value)} 
                            placeholder="Phone" 
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
                            id="formControl" 
                            name="street"
                            value={this.props.user.addressStreet} 
                            type="text" 
                            onChange={(e) => this.props.changeEmail(e.target.value)} 
                            placeholder="Street " 
                        />
                        <Form.Control name="suburb" defaultValue={this.props.user.addressSurburb} custom="true" id="formControl" as="select" custom="true">
                            {MELBOURNE_SUBURB.map((option) => <option value={option === this.props.user.addressSurburb}>{option}</option>)}
                        </Form.Control>
                        <Form.Control 
                            id="formControl" 
                            value={this.props.user.addressPostcode} 
                            type="text" 
                            name="postcode"
                            onChange={(e) => this.props.changeEmail(e.target.value)} 
                            placeholder="Postcode" 
                        />
                        <Form.Control name="state" defaultValue={this.props.user.addressState} id="formControl" as="select" custom="true">
                            {AUS_STATES.map((option) => <option value={option === this.props.user.addressState}>{option}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Button className="ui button" id="profile" type="submit">
                        <Link to="/content"><span id="update">Save</span></Link>
                    </Button>
                </Form>
            </div>
        );
    };
}


const mapStateToProps = (state) => {
    console.log(state);
    return { user: state.authentication.user };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (name) => { dispatch({ type: userConstants.NAME, name: name })}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
