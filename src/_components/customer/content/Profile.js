import React, { Component } from 'react'
import '../../styles/customer/Profile.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeName, changeEmail, changeAddress } from '../../../_actions/edit_profile.action';


class Profile extends Component {
    render() {
        return (
            <div>
                <Form className="profile form">
                    <h1>Edit Personal Information</h1>
                    <hr />
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.name} 
                            onChange={(e) => this.props.changeName(e.target.value)} 
                            placeholder="Name" 
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            value={this.state.email} 
                            onChange={(e) => this.props.changeEmail(e.target.value)} 
                            placeholder="Email" 
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Address</Form.Label>
                        <Form.Control id="formControl" type="text" placeholder="Street " />
                        <Form.Control id="formControl" as="select" custom>
                            <option value="" disabled selected>Select suburb</option>
                            <option>Carlton</option>
                            <option>Carlton North</option>
                            <option>Docklands</option>
                            <option>East Melbourne</option>
                            <option>Flemington</option>
                            <option>Port Melbourne</option>
                            <option>South Bank</option>
                        </Form.Control>
                        <Form.Control id="formControl" type="text" placeholder="Postcode" />
                        <Form.Control id="formControl" as="select" custom>
                            <option value="" disabled selected>Select state</option>
                            <option>New South Wales</option>
                            <option>Victoria</option>
                            <option>Queensland</option>
                            <option>Western Melbourne</option>
                            <option>South Australia</option>
                            <option>Tasmania</option>
                        </Form.Control>
                    </Form.Group>

                    <Button className="ui button" type="submit">
                        <Link to="/content"><span>Save</span></Link>
                    </Button>
                </Form>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return { 
        user: state.authentication.user, 
        initialValues: {
            name: state.authentication.user.name
        }
    };
};

export default connect(mapStateToProps, { changeName, changeEmail, changeAddress })(Profile);
