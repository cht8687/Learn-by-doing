import makeActionCreator from './makeActionCreator';
import {
  SHOW_TOPBAR_SEARCH_MODAL,
  HIDE_TOPBAR_SEARCH_MODAL,
  TOGGLE_TOPBAR_SEARCH_MODAL
} from '../constant/ActionNames';

export const showTopSearchModal = makeActionCreator(SHOW_TOPBAR_SEARCH_MODAL);
export const hideTopSearchModal = makeActionCreator(HIDE_TOPBAR_SEARCH_MODAL);
export const toggleTopSearchModal = makeActionCreator(TOGGLE_TOPBAR_SEARCH_MODAL);
