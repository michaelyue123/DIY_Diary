import { combineReducers} from 'redux';
import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
import { shoppingcart } from './shoppingcart.reducer'

const rootReducer = combineReducers({
    authentication,
    alert,
    shoppingcart
});

export default rootReducer;