import React, { Component } from "react";
import { connect } from 'react-redux';
import { orderActions } from '../../../_actions';
import DataTable from 'react-data-table-component';
import { Button } from 'react-bootstrap';
import { Form, Col } from 'react-bootstrap'
import Popup from "reactjs-popup";

const scores = [1,2,3,4,5]
const pageOptions = [15];

class OrderHistory extends Component{

    constructor(props){
        super(props);
        this.state = {
            orders:[],
            loading: true,
            columns: [
                { name: 'Order ID', selector: 'id', sortable: true, right: false },
                { name: 'Buyer', selector: 'buyer', sortable: true, right: false },
                { name: 'Paper Type', selector: 'paperType', sortable: true, right: false },
                { name: 'Paper Color', selector: 'paperColor', sortable: true, right: false },
                { name: 'Cover Color', selector: 'coverColor', sortable: true, right: false },
                { name: 'Title', selector: 'titleOnCover', sortable: true, right: false },
                { name: 'Order Date', selector: 'orderDate', sortable: true, right: false },
                { name: 'Delivery Date', selector: 'deliveryDate', sortable: true, right: false },
                { name: 'Close Date', selector: 'closeDate', sortable: true, right: false },
                { name: 'Price', selector: 'price', sortable: true, right: false },
                { name: 'Review',
                    cell: (row) => {
                        return this.showPopup(row)
                    }
                },
            ],
            reviewScore: 0,
            reviewDesc: ""
        }
        this.receiveOrder = this.receiveOrder.bind(this);
    }

    componentWillMount(){
        this.receiveOrder();
    }

    showPopup = (row) => {
        return <Popup trigger={<Button style={{height:"70%", fontSize:"14px"}} className="menu-button" variant="warning" type="button" id={`${row.id}-review-btn`}>Review</Button>}
                    modal
                    closeOnDocumentClick
                    style={{"border-radius": "18px"}}
                >
                    {(close)=>(
                            <div id="pop_model">
                                <a id="pop_close" onClick={close}>
                                    &times;
                                </a>
                                <div id="pop_header" style={{}}> 
                                    <span>   
                                        Review for Order: {row.id}
                                    </span>
                                </div>
                                <div id="pop_content">
                                    <Form>
                                        <Form.Row>
                                            {row.reviewDate?
                                                <Form.Group as={Col} md="12" controlId="review_date">
                                                    <Form.Label inline>Review Date: </Form.Label>
                                                    <div style={{display:"inline", marginLeft:"5%"}}> 
                                                        <Form.Control 
                                                            inline
                                                            type="text" 
                                                            value={row.reviewDate}
                                                            disabled
                                                        />
                                                    </div>
                                                </Form.Group>:""
                                            }
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} md="12" controlId="review_score">
                                                <Form.Label inline>Score: </Form.Label>
                                                <div style={{display:"inline", marginLeft:"5%"}}> 
                                                    <select onChange={(e)=> this.onInputChange(e, 'score')} style={{width:"20%"}} disabled={row.reviewDate?true:false}>
                                                        {scores.map((option) => <option selected={option === 5} value={option}>{option}</option>)}
                                                    </select>
                                                </div>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} md="12" controlId="review_desc">
                                                <Form.Label inline>Description: </Form.Label>
                                                <div>
                                                    <Form.Control 
                                                        inline
                                                        type="text" 
                                                        value={row.reviewDesc}
                                                        onChange={(e)=> this.onInputChange(e, 'desc')}
                                                        placeholder='What do you want to say?'
                                                        disabled={row.reviewDate?true:false}
                                                    />
                                                </div>
                                            </Form.Group>
                                        </Form.Row>
                                    </Form>
                                </div>
                                <div id="pop_footer">
                                    {row.reviewDate?"":<Button type="button" className="menu-button" variant="primary" id={`${row.id}-submit-btn`} onClick={()=>this.submitReview(row.id, close)}>Submit</Button>}
                                </div>
                            </div>
                    )}
                </Popup>;
    }

    submitReview = async (orderId, close) => {
        await orderActions.addReview(this.props.user.id, orderId, this.state.reviewScore, this.state.reviewDesc, close)
        this.receiveOrder();
    }

    onInputChange = async (e, symbol) => {
        e.preventDefault();
        this.setState({ 
            reviewScore: symbol==='score'?e.target.value:this.state.reviewScore,
            reviewDesc: symbol==='desc'?e.target.value:this.state.reviewDesc
        });
    }


    receiveOrder = async () =>{

        let orderList = await orderActions.getOrders(this.props.user.id, 9999);

        if (orderList){
            this.setState({
                orders: orderList,
                loading: false
            });
        }else{
            this.setState({
                loading: false
            });
        }
    }

    render(){
        return(
            <div>
                 <div className="text-center">
                    <h1 id="user_header"> {this.props.user.name}'s Order History.</h1>
                </div>
                <div className="content" id="orderListDiv">
                    <div className="table-responsive">
                        <DataTable
                            title="Orders"
                            columns={this.state.columns}
                            data={this.state.orders}
                            pagination
                            progressPending = {this.state.loading}
                            paginationRowsPerPageOptions={pageOptions}
                            highlightOnHover
                        />
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return { 
        user: state.authentication.user,
    };
};

export default connect(mapStateToProps)(OrderHistory);