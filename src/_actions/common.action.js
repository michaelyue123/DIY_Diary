import { commonService } from '../_services/';
import { alertActions } from './';

export const commonActions = {
    getDeliveryOptions,
    getPaymentOptions
};

async function getDeliveryOptions() {
    return commonService.getDeliveryOptions()
            .then(
                options => { 
                    if (options){
                        return options;
                    }else{
                        alertActions.show_info("Cannot get delivery options","Please call administrator.");
                    }
                },
                error => {
                    alertActions.show_error(error.toString());
                }
            );

}

async function getPaymentOptions() {
    return commonService.getPaymentOptions().then(
            options => { 
                if (options){
                    return options;
                }else{
                    alertActions.error("Cannot get payment options","Please call administrator.");
                }
            },
            error => {
                alertActions.error(error.toString());
            }
        );
}