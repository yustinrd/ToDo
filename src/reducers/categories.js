import {
  GET_CATEGORIES,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  SET_CURRENT_CATEGORY_ID
} from '../actions';
import categoriesSchema from "../schemas/categories";
import { normalize } from "normalizr";

const initialState = {
  byId: [],
  allIds: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      const normalizedCategories = normalize(action.categories, categoriesSchema);
      return {
        byId: normalizedCategories.entities.categories,
        allIds: normalizedCategories.result
      };

    case ADD_CATEGORY:
      return applyAddCategory(state, action);

    case DELETE_CATEGORY:
      return applyDeleteCategory(state, action);

    case EDIT_CATEGORY:
      return applyEditCategory(state, action);

    default:
      return state;
  }
}

const applyAddCategory = (state, action) => {
  const category = action.category
  const categories = {
    ...state.byId,
    [category.id]: category
  };
  return {
    ...state,
    byId: categories,
    allIds: [...state.allIds, category.id]
  };
};

const applyEditCategory = (state, action) => {
  const { id } = action.category;
  const categories = {
    ...state.byId,
    [id]: action.category
  };
  return {
    ...state,
    byId: categories
  };
};

const applyDeleteCategory = (state, action) => {
  const id = action.id;
  const allIds = state.allIds.filter(categoryId => categoryId !== id);
  let categories = {};
  allIds.forEach(id => {
    categories[id] = state.byId[id]
  });
  return {
    ...state,
    byId: categories,
    allIds
  };
};

export function currentCategoryIdReducer(state = null, action) {
  switch (action.type) {
    case SET_CURRENT_CATEGORY_ID:
      return action.currentCategoryId;

    default:
      return state;
  }
}
