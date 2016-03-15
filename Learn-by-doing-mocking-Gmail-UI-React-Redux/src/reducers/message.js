import createReducer from './createReducer';
import {
  SHOW_LOADING_MESSAGE,
  HIDE_LOADING_MESSAGE
} from '../constant/Actionnames';
import { Record } from 'immutable';

class State extends Record({

  showLoading: false

}){

}

const handlers = {
  [SHOW_LOADING_MESSAGE](state){
    state = state.set('showLoading', true);
  },
  [HIDE_LOADING_MESSAGE](state){
    state = state.set('showLoading', false);
  }
}

export default createReducer(new State(), handlers);
