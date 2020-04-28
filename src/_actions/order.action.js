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
                        alertActions.show_info("No Orders","");
                    }
                },
                error => {
                    alertActions.show_error(error.toString());
                }
            );
}

function getOrder(userId){

}

function sendOrder(order){
    
}