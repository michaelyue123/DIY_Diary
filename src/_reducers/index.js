import { combineReducers} from 'redux';
import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
import { testReducer } from './test.reducer'

const rootReducer = combineReducers({
    authentication,
    alert,
    testReducer
});

export default rootReducer;