import { alertConstants } from '../_constants';
import { alertService } from '../_services/alert.service'

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      alertService.success(action.title, action.message, action.showConfirmButton, action.timer);
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertConstants.ERROR:
      alertService.error(action.title, action.message);
      return {
        type: 'alert-danger',
        message: action.message
      };
    case alertConstants.INFO:
      alertService.info(action.title, action.message);
      return {
        type: 'alert-info',
        message: action.message
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}