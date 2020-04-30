import { combineReducers} from 'redux';
import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
import { shoppingcart } from './shoppingcart.reducer';
import { orderDetail } from './order.reducer';
import { editProfileReducer } from './edit_profile.reducer';

const rootReducer = combineReducers({
    authentication,
    alert,
    shoppingcart,
    orderDetail,
    editProfileReducer
});

export default rootReducer;