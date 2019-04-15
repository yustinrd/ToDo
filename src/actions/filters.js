export const SET_SEARCH_FILTER = 'SET_SEARCH_FILTER';
export const SET_SHOW_DONE_FILTER = 'SET_SHOW_DONE_FILTER';

export function setSearchFilter(searchFilter) {
  return {
    type: SET_SEARCH_FILTER,
    searchFilter
  };
}

export function setShowDoneFilter(showDoneFilter) {
  return {
    type: SET_SHOW_DONE_FILTER,
    showDoneFilter
  };
}