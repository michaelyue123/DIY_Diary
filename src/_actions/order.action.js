import { orderService } from '../_services';
import { alertActions } from './';

export const orderActions = {
    getOrders,
    getOrder,
    sendOrder
};

function getOrders(userId, number){

    return dispatch => {

        orderService.getOrders(userId, number)
            .then(
                orders => { 
                    if (orders){
                        return orders;
                    }else{
                        dispatch(alertActions.info("No Orders",""));
                    }
                },
                error => {
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    
}

function getOrder(userId){

}

function sendOrder(order){
    
}