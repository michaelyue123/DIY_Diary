import '../../styles/customer/Content.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react'
import { connect } from 'react-redux';
import { Row, Container, Col } from 'react-bootstrap'


const Content = ({ user, order }) => {
    return (
        <div>
            <Container className="dl list" id="block">
                <h1 style={{textAlign: "center", fontFamily: "fantasy", fontSize: "1.2em"}}>Personal Information</h1>
                <hr id="hr" />
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>Name:</Col>
                    <Col sm={{ size: 'auto'}}>{user.name}</Col>
                </Row>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>Email:</Col>
                    <Col sm={{ size: 'auto'}}>{user.email}</Col>
                </Row>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>Phone:</Col>
                    <Col sm={{ size: 'auto'}}>{user.phone}</Col>
                </Row> 
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>Street:</Col>
                    <Col sm={{ size: 'auto'}}>{user.addressStreet}</Col>
                </Row>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>Suburb:</Col>
                    <Col sm={{ size: 'auto'}}>{user.addressSurburb}</Col>
                </Row>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>Postcode:</Col>
                    <Col sm={{ size: 'auto'}}>{user.addressPostcode}</Col> 
                </Row>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>State:</Col>
                    <Col sm={{ size: 'auto'}}>{user.addressState}</Col>
                </Row>
                <div className="content button">
                    <Button className="ui button" id="personal" type="submit">
                        <Link to="/profile"><span id="update">Update</span></Link>
                    </Button>
                </div>
            </Container>

            <dl className="dl list" id="block">
                <h1 style={{textAlign: "center", fontFamily: "fantasy", fontSize: "1.2em"}}>Order Detail</h1>
                <hr id="hr" />
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>Order ID:</Col>
                    <Col sm={{ size: 'auto'}}>{order.orderID}</Col>
                </Row>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>Order Date:</Col>
                    <Col sm={{ size: 'auto'}}>{order.order_date}</Col>
                </Row>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>Phone:</Col>
                    <Col sm={{ size: 'auto'}}>{order.phone}</Col>
                </Row>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>Delivery Date:</Col>
                    <Col sm={{ size: 'auto'}}>{order.delivery_date}</Col>
                </Row>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>Delivery State:</Col>
                    <Col sm={{ size: 'auto'}}>{order.delivery_state}</Col>
                </Row>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>Delivery Suburb:</Col>
                    <Col sm={{ size: 'auto'}}>{order.delivery_suburb}</Col>
                </Row>
            </dl>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return { 
        user: state.authentication.user,
        order: state.orderDetail.order
    };
};

export default connect(mapStateToProps)(Content);