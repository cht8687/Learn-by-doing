import makeActionCreator from './makeActionCreator';
import {
  SHOW_TOPBAR_SEARCH_MODAL,
  HIDE_TOPBAR_SEARCH_MODAL
} from '../constants/ActionNames';

export const showTopSearchModal = makeActionCreator(SHOW_TOPBAR_SEARCH_MODAL);
export const hideTopSearchModal = makeActionCreator(HIDE_TOPBAR_SEARCH_MODAL);

