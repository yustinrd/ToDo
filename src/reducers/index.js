import { combineReducers } from 'redux';

import categories, * as fromCategories from './categories';
import todos from './todos';
import modal from './modal';
import { showDoneFilterReducer, searchFilterReducer } from './filters';

const reducer = combineReducers({
  categories,
  todos,
  modal,
  currentCategoryId: fromCategories.currentCategoryIdReducer,
  showDoneFilter: showDoneFilterReducer,
  searchFilter: searchFilterReducer
});

export default reducer;

export function getSortedCategories(state) {
  return fromCategories.getSortedCategories(state.categories);
}
