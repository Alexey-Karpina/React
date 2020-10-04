import {combineReducers} from 'redux';
import auth from './auth';
import reducer from './contacts';

export default combineReducers({
    auth,
    reducer,
})