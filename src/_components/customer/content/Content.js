import '../../styles/customer/Content.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react'

export const Content = () => {
    return (
        <div>
            <dl className="dl list" id="block">
                <h1 style={{textAlign: "center", fontFamily: "fantasy"}}>Personal Information</h1>
                <hr id="hr" />
                <dt>Name:</dt>
                <dd>Michael</dd>
                <dt>Email:</dt>
                <dd>michaelyue123@gmail.com</dd>
                <dt>Password:</dt>
                <dd>xxxxxxxxx</dd>
                <dt>Phone number:</dt>
                <dd>12345678</dd>
                <dt>Address:</dt>
                <dd>xxxxxxxxx</dd>
                <Button className="ui button" id="personal" type="submit">
                    <Link to="/profile"><span id="update">Update</span></Link>
                </Button>
            </dl>

            <dl className="dl list" id="block">
                <h1 style={{textAlign: "center", fontFamily: "fantasy"}}>Order Detail</h1>
                <hr id="hr" />
                <dt>Order ID:</dt>
                <dd>s3433432432432</dd>
                <dt>Order Date:</dt>
                <dd>14th December 2019</dd>
                <dt>Status:</dt>
                <dd>waiting to be dispatched</dd>
                <dt>Review</dt>
                <dd>xxxxxxxxx</dd>
                <Button className="ui button" id="personal" type="submit">
                    <Link><span>View Details</span></Link>
                </Button>
            </dl>
        </div>
    )
}

