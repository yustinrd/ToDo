import { createSelector } from 'reselect';

const getShowDoneFilter = (state) => state.showDoneFilter;
const getSearchFilter = (state) => state.searchFilter;
const getCurrentCategory = (state) => state.currentCategoryId;
const getTodos = (state) => state.todos;

export const getFiltredTodos = createSelector(
  [ getShowDoneFilter, getSearchFilter, getCurrentCategory, getTodos ],
  (showDoneFilter, searchFilter, currentCategoryId, todos) => {
    todos = todos.filter(todo => todo.categoryId === currentCategoryId);

    if (showDoneFilter)
      todos = todos.filter(todo => todo.done);
    else
      todos = todos.filter(todo => !todo.done);

    const searchFilterLowercased = searchFilter.toLowerCase();
    return todos.filter(todo => ~todo.text.toLowerCase().indexOf(searchFilterLowercased));
  }
);