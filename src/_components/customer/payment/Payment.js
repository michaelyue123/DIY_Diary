import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import '../../styles/customer/payment/Payment.css';
import { Link } from 'react-router-dom';
import { commonActions } from '../../../_actions';
import Cards from '../../../_images/credit-cards.png'
import PayPal from '../../../_images/paypal.png'
import '../../styles/Register.css';

class Payment extends Component{

    constructor(props){
        super(props);
        this.state = {
            delivery_options:[],
            payment_options:[],
            checkout_info:{
                payment_method: 1
            }
        }
        this.getOption = this.getOption.bind(this);
    }


    componentDidMount(){
        this.getOption();
    }

    getOption = async () =>{
        this.setState({
            delivery_options: await commonActions.getDeliveryOptions(),
            payment_options: await commonActions.getPaymentOptions()
        })
    }

    onPaymentChanged = (e) => {
        this.setState({
            checkout_info:{
                payment_method: parseInt(e.currentTarget.value)
            }
        });
    }

    getPaymentRadioButton = () =>{
        return this.state.payment_options.map((option)=>
        <>
            <input type="radio" name="site_name" 
                value={option.id} 
                checked={this.state.checkout_info.payment_method === option.id} 
                onChange={this.onPaymentChanged} /><span>{option.id == 1?<img src={PayPal} className="payment_img" />:<img src={Cards} className="payment_img" />}</span>
        </>
        );
    }

    onInputChange = (e) => {

    }

    getCardDetail = () => {
        if (this.state.checkout_info.payment_method == 2){
            return (
                <div>
                    <dt className="">
                        <span>Card Number:</span>
                    </dt>
                    <dd className="ui input" style={{width: "70%"}}>
                        <input
                            type="text"
                            onChange={this.onInputChange}
                            name="cardNumber"
                            placeholder='Credit Card Number'
                            required
                        />
                    </dd>
                    <dt className="">
                        <span>Expired Date:</span>
                    </dt>
                    <dd className="ui input" style={{width: "70%"}}>
                        <input
                            type="text"
                            onChange={this.onInputChange}
                            name="expiredDateM"
                            placeholder='MM'
                            required
                        />
                        <p>/</p>
                        <input
                            type="text"
                            onChange={this.onInputChange}
                            name="expiredDateY"
                            placeholder='YY'
                            required
                        />
                    </dd>
                    <dt className="">
                        <span>Security Number:</span>
                    </dt>
                    <dd className="ui input" style={{width: "20%"}}>
                        <input
                            type="text"
                            onChange={this.onInputChange}
                            name="securityNumber"
                            placeholder='XXX'
                            required
                        />
                    </dd>
                </div>
            );
                
        }
    }

    render(){
        return (
            <div>
                <div>
                    <div style = {{width:"90%", margin: "0 auto"}}>
                        <center>
                            <div id="pay-deli-box">
                                <div className="pay-deli-box">
                                    <center>
                                        <dl className="dl list1">
                                            <h1 style={{textAlign: "center", fontFamily: "fantasy"}}>Payment Information</h1>
                                            <hr id="hr" />
                                            <dt>Method:</dt>
                                            <dd>
                                                {this.getPaymentRadioButton()}
                                            </dd>
                                            {this.getCardDetail()}
                                            
                                        </dl>
                                    </center>
                                </div>
                                <div className="pay-deli-box">
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
                            </div>
                            <div id="order_summary">
                                <div className="pay-deli-box">
                                    <center>
                                        <dl className="dl list1">
                                            <h1 style={{textAlign: "center", fontFamily: "fantasy"}}>Order Summary</h1>
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
                            </div>
                            <div>
                                <dl id="button-block">
                                    <Button className="ui button" id="checkout" type="submit">
                                        <Link><span>Order and Pay</span></Link>
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