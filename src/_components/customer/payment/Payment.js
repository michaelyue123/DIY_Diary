import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import '../../styles/customer/payment/Payment.css';
import { Link } from 'react-router-dom';
import { commonActions } from '../../../_actions';
import Cards from '../../../_images/credit-cards.png'
import PayPal from '../../../_images/paypal.png'
import '../../styles/Register.css';
import { AUS_STATES } from '../../../_constants';

class Payment extends Component{

    constructor(props){
        super(props);
        this.state = {
            delivery_options:[],
            payment_options:[],
            checkout_info:{
                payment_method: 1,
                delivery_option: 1
            },
            user:{
                id: this.props.user.id,
                name: this.props.user.name,
                email: this.props.user.email,
                phone: this.props.user.phone,
                addressStreet: this.props.user.addressStreet,
                addressSurburb: this.props.user.addressSurburb,
                addressPostcode: this.props.user.addressPostcode,
                addressState: this.props.user.addressState
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
                payment_method: parseInt(e.currentTarget.value),
                delivery_option: this.state.checkout_info.delivery_option,
            }
        });
    }

    onDeliveryChanged = (e) => {
        this.setState({
            checkout_info:{
                payment_method: this.state.checkout_info.payment_method,
                delivery_option: parseInt(e.currentTarget.value)
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

    onInputChange = async (e, symbol) => {
        e.preventDefault();
        await this.setState({ 
            user: {
                id: this.state.id,
                name: symbol==='name'?e.target.value:this.state.name,
                email: symbol==='email'?e.target.value:this.state.email,
                phone: symbol==='phone'?e.target.value:this.state.phone,
                addressStreet: symbol==='street'?e.target.value:this.state.addressStreet,
                addressSurburb: symbol==='suburb'?e.target.value:this.state.addressSurburb,
                addressPostcode: symbol==='postcode'?e.target.value:this.state.addressPostcode,
                addressState: symbol==='state'?e.target.value:this.state.addressState 
            }
        });
    }

    getCardDetail = () => {
        if (this.state.checkout_info.payment_method == 2){
            return (
                <div>
                    <dt className="">
                        <span>Card Number:</span>
                    </dt>
                    <dd className="ui input pay_input" style={{width: "60%"}}>
                        <input
                            type="text"
                            name="cardNumber"
                            placeholder='Credit Card Number'
                            required
                        />
                    </dd>
                    <dt className="">
                        <span>Expired Date:</span>
                    </dt>
                    <dd className="ui input pay_input" style={{width: "60%"}}>
                        <input
                            type="text"
                            name="expiredDateM"
                            placeholder='MM'
                            required
                            style={{width: "25%"}}
                        />
                        <p>/</p>
                        <input
                            type="text"
                            name="expiredDateY"
                            placeholder='YY'
                            required
                            style={{width: "25%"}}
                        />
                    </dd>
                    <dt className="">
                        <span>Security Number:</span>
                    </dt>
                    <dd className="ui input pay_input" style={{width: "20%"}}>
                        <input
                            type="text"
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
                                        <dl className="payment_box">
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
                                        <dl className="payment_box">
                                            <h1 style={{textAlign: "center", fontFamily: "fantasy"}}>Delivery Information</h1>
                                            <hr id="hr" />
                                            <dt>Options:</dt>
                                            <dd>
                                                <select onChange={(e)=> this.onInputChange(e, 'delivery')}>
                                                    {this.state.delivery_options.map((option) => <option value={option.id}>{option.description}</option>)}
                                                </select>
                                            </dd>
                                            <dt className="">
                                                <span>Name:</span>
                                            </dt>
                                            <dd className="ui input pay_input" style={{width: "60%"}}>
                                                <input
                                                    type="text"
                                                    onChange={(e)=> this.onInputChange(e, 'name')}
                                                    name="name"
                                                    placeholder='Name'
                                                    required
                                                    value={this.state.user.name}
                                                />
                                            </dd>
                                            <dt className="">
                                                <span>Phone:</span>
                                            </dt>
                                            <dd className="ui input pay_input" style={{width: "60%"}}>
                                                <input
                                                    type="text"
                                                    onChange={(e)=> this.onInputChange(e, 'phone')}
                                                    name="phone"
                                                    placeholder='Phone'
                                                    required
                                                    value={this.state.user.phone}
                                                />
                                            </dd>
                                            <dt className="">
                                                <span>Address:</span>
                                            </dt>
                                            <dd className="ui input pay_input" style={{width: "60%"}}>
                                                <input
                                                    type="text"
                                                    onChange={(e)=> this.onInputChange(e, 'street')}
                                                    name="address"
                                                    placeholder='Address, Street'
                                                    required
                                                    value={this.state.user.addressStreet}
                                                />
                                            </dd>
                                            <dt className="">
                                                <span>Suburb:</span>
                                            </dt>
                                            <dd className="ui input pay_input" style={{width: "60%"}}>
                                                <input
                                                    type="text"
                                                    onChange={(e)=> this.onInputChange(e, 'suburb')}
                                                    name="suburb"
                                                    placeholder='Suburb'
                                                    required
                                                    value={this.state.user.addressSurburb }
                                                />
                                            </dd>
                                            <dt className="">
                                                <span>Postal Code:</span>
                                            </dt>
                                            <dd className="ui input pay_input" style={{width: "60%"}}>
                                                <input
                                                    type="text"
                                                    onChange={(e)=> this.onInputChange(e, 'postcode')}
                                                    name="postCode"
                                                    required
                                                    value={this.state.user.addressPostcode}
                                                />
                                            </dd>
                                            <dt>State:</dt>
                                            <dd>
                                                <select onChange={(e)=> this.onInputChange(e, 'state')}>
                                                    {AUS_STATES.map((option) => <option selected={option === this.state.user.addressState} value={option}>{option}</option>)}
                                                </select>
                                            </dd>
                                        </dl>
                                    </center>
                                </div>
                            </div>
                            <div id="order_summary">
                                <div className="pay-deli-box">
                                    <center>
                                        <dl className="payment_box">
                                            <h1 style={{textAlign: "center", fontFamily: "fantasy"}}>Order Summary</h1>
                                            <hr id="hr" />
                                            <dt>Diary Title:</dt>
                                            <dd>
                                                {this.props.shoppingcart.title_on_cover}
                                            </dd>
                                            <dt>Paper type:</dt>
                                            <dd>{this.props.shoppingcart.paper_type}</dd>
                                            <dt>Paper Color:</dt>
                                            <dd>{this.props.shoppingcart.paper_color}</dd>
                                            <dt>Cover Color</dt>
                                            <dd>{this.props.shoppingcart.cover_color}</dd>
                                            <hr id="hr" />
                                            <dt>Price:</dt>
                                            <dd>AUD $ 20</dd>
                                            <dt>Delivery fee:</dt>
                                            <dd>{this.state.checkout_info.delivery_option===2? 'AUD $ 9.9':"AUD $ 0"}</dd>
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
    console.log(state.shoppingcart);
    return {
        shoppingcart: state.shoppingcart.diarysettings,
        user: state.authentication.user
    }
}

export default connect(mapStatesToProps, actionCreator)(Payment);