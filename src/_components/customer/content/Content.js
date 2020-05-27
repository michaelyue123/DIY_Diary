import '../../styles/customer/Content.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Row, Container, Col } from 'react-bootstrap';
import { orderActions } from '../../../_actions'; 

class Content extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: this.props.user,
            order: null
        }

        this.getOrder = this.getOrder.bind(this)
    }

    componentWillMount(){
        this.getOrder();
    }

    getOrder = async () => {
        let result = await orderActions.getOrders(this.state.user.id, 1)
        if (result){
            this.setState({
                order: result[0]
            })
        }
    }

    render(){
        return (
            <div>
                <Container className="dl list" id="block">
                    <h1 style={{textAlign: "center", fontFamily: "fantasy", fontSize: "1.2em"}}>Personal Information</h1>
                    <hr id="hr" />
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>Name:</Col>
                        <Col sm={{ size: 'auto'}}>{this.state.user.name}</Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>Email:</Col>
                        <Col sm={{ size: 'auto'}}>{this.state.user.email}</Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>Phone:</Col>
                        <Col sm={{ size: 'auto'}}>{this.state.user.phone}</Col>
                    </Row> 
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>Street:</Col>
                        <Col sm={{ size: 'auto'}}>{this.state.user.addressStreet}</Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>Suburb:</Col>
                        <Col sm={{ size: 'auto'}}>{this.state.user.addressSurburb}</Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>Postcode:</Col>
                        <Col sm={{ size: 'auto'}}>{this.state.user.addressPostcode}</Col> 
                    </Row>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>State:</Col>
                        <Col sm={{ size: 'auto'}}>{this.state.user.addressState}</Col>
                    </Row>
                    <div className="content button">
                        <Button className="ui button" id="personal" type="submit">
                            <Link to="/profile"><span id="update">Update</span></Link>
                        </Button>
                    </div>
                </Container>
                {this.state.order ?
                <Container className="dl list" id="block">
                    <h1 style={{textAlign: "center", fontFamily: "fantasy", fontSize: "1.2em"}}>Order Detail</h1>
                    <hr id="hr" />
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>Order ID:</Col>
                            <Col sm={{ size: 'auto'}}>{this.state.order.id}</Col>
                        </Row>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>Order Date:</Col>
                            <Col sm={{ size: 'auto'}}>{this.state.order.orderDate}</Col>
                        </Row>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>Phone:</Col>
                            <Col sm={{ size: 'auto'}}>{this.state.order.phone}</Col>
                        </Row>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>Delivery Date:</Col>
                            <Col sm={{ size: 'auto'}}>{this.state.order.deliveryDate}</Col>
                        </Row>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>Delivery State:</Col>
                            <Col sm={{ size: 'auto'}}>{this.state.order.deliveryState}</Col>
                        </Row>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>Delivery Suburb:</Col>
                            <Col sm={{ size: 'auto'}}>{this.state.order.deliverySuburb}</Col>
                        </Row>
                        <div className="content button">
                            <Button className="ui button" id="order_history" type="button">
                                <Link to="/order_history">My History</Link>
                            </Button>
                        </div>
                    </Container>
                    :<span>No order history</span>
                }
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return { 
        user: state.authentication.user,
        order: state.orderDetail.order
    };
};

export default connect(mapStateToProps)(Content);