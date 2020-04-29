import '../../styles/customer/Content.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react'
import { connect } from 'react-redux';


const Content = ({ user }) => {
    return (
        <div>
            <dl className="dl list" id="block">
                <h1 style={{textAlign: "center", fontFamily: "fantasy", fontSize: "1.3em"}}>Personal Information</h1>
                <hr id="hr" />
                <dt>Name:</dt>
                <dd>{user.name}</dd>
                <dt>Email:</dt>
                <dd>{user.email}</dd>
                <dt>Phone:</dt>
                <dd>{user.phone}</dd>
                <dt>Street:</dt>
                <dd>{user.addressStreet}</dd>
                <dt>Suburb:</dt>
                <dd>{user.addressSurburb}</dd>
                <dt>Postcode:</dt>
                <dd>{user.addressPostcode}</dd>
                <dt>State:</dt>
                <dd>{user.addressState}</dd>
                <div>
                    <Button className="ui button" id="personal" type="submit">
                        <Link to="/profile"><span id="update">Update</span></Link>
                    </Button>
                </div>
            </dl>

            <dl className="dl list" id="block">
                <h1 style={{textAlign: "center", fontFamily: "fantasy", fontSize: "1.3em"}}>Order Detail</h1>
                <hr id="hr" />
                <dt>Order ID:</dt>
                <dd>s3433432432432</dd>
                <dt>Order Date:</dt>
                <dd>14th December 2019</dd>
                <dt>Status:</dt>
                <dd>waiting to be dispatched</dd>
                <dt>Review</dt>
                <dd>xxxxxxxxx</dd>
                <div>
                    <Button className="ui button" id="personal" type="submit">
                        <span>View Details</span>
                    </Button>
                </div>
            </dl>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return { user: state.authentication.user };
};

export default connect(mapStateToProps)(Content);