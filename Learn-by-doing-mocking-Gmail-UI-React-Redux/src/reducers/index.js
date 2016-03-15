import { combineReducers } from 'redux';
import { default as message } from './message';

const rootReducer = combineReducers({
	message
})

export default rootReducer;