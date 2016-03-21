import { combineReducers } from 'redux';
import { default as message } from './message';
import { default as topbar } from './topBar';

const rootReducer = combineReducers({
	message,
	topbar
})

export default rootReducer;