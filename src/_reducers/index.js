import { combineReducers} from 'redux';
import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
import { editProfileReducer } from './edit_profile.reducer';

const rootReducer = combineReducers({
    authentication,
    alert,
    editProfileReducer
});

export default rootReducer;