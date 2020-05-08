import React, { Component } from 'react';
import '../styles/OrderTable.css'
import DataTable from 'react-data-table-component';
import { connect } from 'react-redux';
import { orderActions } from '../../_actions';

const columns = [
    { name: 'Order ID', selector: 'id', sortable: true, right: true },
    { name: 'Buyer', selector: 'buyer', sortable: true, right: true },
    { name: 'Paper Type', selector: 'paperType', sortable: true, right: true },
    { name: 'Paper Color', selector: 'paperColor', sortable: true, right: true },
    { name: 'Cover Color', selector: 'coverColor', sortable: true, right: true },
    { name: 'Title', selector: 'titleOnCover', sortable: true, right: true },
    { name: 'Order Date', selector: 'orderDate', sortable: true, right: true },
    { name: 'Delivery Date', selector: 'deliveryDate', sortable: true, right: true },
    { name: 'Close Date', selector: 'closeDate', sortable: true, right: true },
  ];

const pageOptions = [15];

class OrderTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            orders:[],
            loading: true
        }
        this.receiveOrder = this.receiveOrder.bind(this);
    }

    componentWillMount(){
        this.receiveOrder();
    }

    receiveOrder = async () =>{

        let orderList = await orderActions.getOrders(this.props.user.id, this.props.count);

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
            <div className="table-responsive">
                <DataTable
                    title="Orders"
                    columns={columns}
                    data={this.state.orders}
                    pagination
                    progressPending = {this.state.loading}
                    paginationRowsPerPageOptions={pageOptions}
                    highlightOnHover
                />
            </div>
        );
    };

}

const actionCreators = {
};


const mapStateToProps = (state) => ({
    user: state.authentication.user
});

export default connect(mapStateToProps, actionCreators)(OrderTable);