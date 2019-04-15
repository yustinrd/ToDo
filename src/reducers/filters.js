import { SET_SEARCH_FILTER, SET_SHOW_DONE_FILTER } from '../actions';

export function showDoneFilterReducer(state = false, action) {
  switch (action.type) {
    case SET_SHOW_DONE_FILTER:
      return action.showDoneFilter;

    default:
      return state;
  }
}

export function searchFilterReducer(state = '', action) {
  switch (action.type) {
    case SET_SEARCH_FILTER:
      return action.searchFilter;

    default:
      return state;
  }
}
