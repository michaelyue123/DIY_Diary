import { commonService } from '../_services/';
import { alertActions } from './';

export const commonActions = {
    getDeliveryOptions,
    getPaymentOptions,
    getParameters
};

async function getDeliveryOptions() {
    return commonService.getDeliveryOptions()
            .then(
                options => { 
                    if (options){
                        return options;
                    }else{
                        alertActions.show_info("Cannot get delivery options","Please call administrator.", "", null);
                    }
                },
                error => {
                    alertActions.show_error(error.toString(), "", null);
                }
            );

}

async function getPaymentOptions() {
    return commonService.getPaymentOptions().then(
            options => { 
                if (options){
                    return options;
                }else{
                    alertActions.show_info("Cannot get payment options","Please call administrator.");
                }
            },
            error => {
                alertActions.show_error(error.toString());
            }
        );
}

async function getParameters() {
    return commonService.getParameters().then(
            parameters => { 
                if (parameters){
                    return parameters;
                }else{
                    alertActions.show_info("Cannot get diary parameters","Please call administrator.", null);
                }
            },
            error => {
                alertActions.show_error(error.toString(), null);
            }
        );
}