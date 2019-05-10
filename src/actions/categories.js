import * as categoryApi from '../api/categories';
import { push, createMatchSelector } from 'connected-react-router';
import { routes } from '../router.js';
import store from '../store';

export const SET_CATEGORIES = 'SET_CATEGORIES';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const SET_CURRENT_CATEGORY_ID = 'SET_CURRENT_CATEGORY_ID';

export function getCategories() {
  return dispatch => {
    return categoryApi.getAllCategories()
      .then(response => response.data)
      .then(categories => {
        dispatch({
          type: SET_CATEGORIES,
          categories
        });

        const matchSelector = createMatchSelector(routes.category);
        const match = matchSelector(store.getState());

        if (match !== null && match.path === routes.category.path) {
          const id = parseInt(match.params.id);
          dispatch(setCurrentCategoryId(id));
        } else {
          dispatch(setCurrentCategoryId(null));
        }
      });
  };
}

export function addCategory(category) {
  return dispatch => {
    return categoryApi.addCategory(category)
      .then(response => response.data)
      .then(category => dispatch({
        type: ADD_CATEGORY,
        category
      }));
  };
}

export function deleteCategory(id) {
  return dispatch => {
    return categoryApi.deleteCategory(id)
      .then(response => {
        dispatch({
          type: DELETE_CATEGORY,
          id
        });

        const currentCategoryId = store.getState().currentCategoryId;
        if (id === currentCategoryId)
          dispatch(setCurrentCategoryId(null));
      });
  };
}

export function editCategory(category) {
  return dispatch => {
    return categoryApi.editCategory(category)
      .then(response => response.data)
      .then(category => dispatch({
        type: EDIT_CATEGORY,
        category
      }));
  };
}

export function setCurrentCategoryId(id) {
  return dispatch => {
    let url = '/';
    const categoryIdList = store.getState().categories.allIds;
    if (categoryIdList.length > 0) {
      if (categoryIdList.find(itemId => itemId === id) === undefined) {
        id = categoryIdList[0];
      }
      url = '/category/' + id;
    } else {
      id = null;
    }

    dispatch({
      type: SET_CURRENT_CATEGORY_ID,
      currentCategoryId: id,
    });
    dispatch(push(url));
  };
}
