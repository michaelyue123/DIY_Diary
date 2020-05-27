import { orderService } from '../_services';
import { alertActions } from './';

export const orderActions = {
    getOrders,
    addReview,
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

async function addReview(userId, orderId, reviewScore, reviewDesc, close){

    return orderService.addReview(userId, orderId, reviewScore, reviewDesc)
            .then(
                response => { 
                    let code = response.resultCode;
                    if (code == 0){
                        alertActions.show_success("Thank your for giving a review.", "", true, 0, close())
                        return response.returnObj;
                    }else{
                        alertActions.show_error(response.returnObj, "", null);
                    }
                },
                error => {
                    alertActions.show_error(error.toString(), "", null);
                }
            );
}

function sendOrder(order){
    console.log("Send order");
    return orderService.sendOrder(order)
            .then(
                orderId => { 
                    if (orderId){
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