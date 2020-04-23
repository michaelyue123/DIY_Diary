import React from 'react'
import '../styles/Profile/Profile.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Profile = () => {
    return (
        <div>
            <Form className="profile form">
                <h1>Edit Personal Information</h1>
                <hr />
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control id="formControl" type="text" placeholder="Street " />
                    <Form.Control id="formControl" as="select" custom>
                        <option value="" disabled selected>select suburb</option>
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
                        <option value="" disabled selected>select state</option>
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
}

