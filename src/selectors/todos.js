import { createSelector } from 'reselect';

const getShowDoneFilter = (state) => state.showDoneFilter;
const getSearchFilter = (state) => state.searchFilter;
const getCurrentCategory = (state) => state.currentCategoryId;
const getTodos = (state) => state.todos;

export const getFilteredTodos = createSelector(
  [ getShowDoneFilter, getSearchFilter, getCurrentCategory, getTodos ],
  (showDoneFilter, searchFilter, currentCategoryId, todos) => {
    let filteredTodoIdList = todos.allIds;
    filteredTodoIdList = filteredTodoIdList.filter(id => todos.byId[id].categoryId === currentCategoryId);

    if (!showDoneFilter)
      filteredTodoIdList = filteredTodoIdList.filter(id => !todos.byId[id].done);

    const searchFilterLowercased = searchFilter.toLowerCase();
    filteredTodoIdList = filteredTodoIdList.filter(id => ~todos.byId[id].text.toLowerCase().indexOf(searchFilterLowercased));

    return filteredTodoIdList.map(id => todos.byId[id]);
  }
);
