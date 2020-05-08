import { orderService } from '../_services';
import { alertActions } from './';

export const orderActions = {
    getOrders,
    getOrder,
    sendOrder
};

async function getOrders(userId, number){

    return orderService.getOrders(userId, number)
            .then(
                orders => { 
                    if (orders){
                        return orders;
                    }else{
                        alertActions.show_info("No Orders","", null);
                    }
                },
                error => {
                    alertActions.show_error(error.toString(), "", null);
                }
            );
}

function getOrder(userId){

}

function sendOrder(order){
    console.log("Send order");
    return orderService.sendOrder(order)
            .then(
                orderId => { 
                    if (orderId){
                        console.log("order id: " + orderId);
                        return orderId;
                    }else{
                        alertActions.show_error("Order failed","Please contact with administrator.", null);
                    }
                },
                error => {
                    // dispatch(alertActions.error(error.toString()));
                }
            );
}