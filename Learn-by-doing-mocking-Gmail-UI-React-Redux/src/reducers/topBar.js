import createReducer from './createReducer';
import {
  SHOW_TOPBAR_SEARCH_MODAL,
  HIDE_TOPBAR_SEARCH_MODAL
} from '../constant/Actionnames';
import { Record } from 'immutable';

class State extends Record({
  topSearchModalActive: false

}){

}

const handlers = {
  [SHOW_TOPBAR_SEARCH_MODAL](state){
    state = state.set('topSearchModalActive', true);
  },
  [HIDE_TOPBAR_SEARCH_MODAL](state){
    state = state.set('topSearchModalActive', false);
  }
}

export default createReducer(new State(), handlers);
