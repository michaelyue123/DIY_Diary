import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import '../../styles/customer/Payment.css';
import { Link } from 'react-router-dom';
import { commonActions } from '../../../_actions';

class Payment extends Component{

    constructor(props){
        super(props);
        this.state = {
            delivery_options:[],
            payment_options:[]
        }
        this.getOption = this.getOption.bind(this);
    }


    componentDidMount(){
        this.getOption();
    }

    getOption = async () =>{
        this.setState({
            delivery_options: await commonActions.getDeliveryOptions(),
            payment_options: await commonActions.getDeliveryOptions()
        })
    }

    getDeliveryOption = () =>{
        
    }

    render(){
        return (
            <div>
                <div>
                    <div style = {{width:"90%", margin: "0 auto"}}>
                        <center>
                            <div className="info-box">
                                <center>
                                    <dl className="dl list1">
                                        <h1 style={{textAlign: "center", fontFamily: "fantasy"}}>Delivery Information</h1>
                                        <hr id="hr" />
                                        <dt>Options:</dt>
                                        <dd>
                                            <select>
                                                {this.state.delivery_options.map((option) => <option key={option.id}>{option.description}</option>)}
                                            </select>

                                        </dd>
                                        <dt>Name:</dt>
                                        <dd>michaelyue123@gmail.com</dd>
                                        <dt>Phone:</dt>
                                        <dd>xxxxxxxxx</dd>
                                        <dt>Address:</dt>
                                        <dd>12345678</dd>
                                        <dt>Suburb:</dt>
                                        <dd>xxxxxxxxx</dd>
                                        <dt>State:</dt>
                                        <dd>xxxxxxxxx</dd>
                                    </dl>
                                </center>
                            </div>
                            <div className="info-box">
                                <center>
                                    <dl className="dl list1">
                                        <h1 style={{textAlign: "center", fontFamily: "fantasy"}}>Payment Information</h1>
                                        <hr id="hr" />
                                        <dt>Order ID:</dt>
                                        <dd>s3433432432432</dd>
                                        <dt>Order Date:</dt>
                                        <dd>14th December 2019</dd>
                                        <dt>Status:</dt>
                                        <dd>waiting to be dispatched</dd>
                                        <dt>Review</dt>
                                        <dd>xxxxxxxxx</dd>
                                    </dl>
                                </center>
                            </div>
                            <div>
                                <dl className="dl list1" id="button-block">
                                    <Button className="ui button" id="checkout" type="submit">
                                        <Link><span>Checkout</span></Link>
                                    </Button>
                                    <Button className="ui button" id="reset">
                                        <span>Reset</span>
                                    </Button>
                                </dl>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
            
        );
    }

}

const actionCreator = () => {
    return {
    }
}

const mapStatesToProps = (state) => {
    return {
        shoppingcart: state.shoppingcart,
        user: state.authentication.user
    }
}

export default connect(mapStatesToProps, actionCreator)(Payment);