import { GET_CATEGORIES, ADD_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY, SET_CURRENT_CATEGORY_ID } from '../actions';

function categoryReducer(state = {}, action) {
  switch (action.type) {
    case EDIT_CATEGORY:
      if (state.id !== action.category.id) {
        return state;
      }

      return action.category;

    default:
      return state;
  }
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_CATEGORIES:

      return action.categories;

    case ADD_CATEGORY:
      return [...state, action.category];

    case DELETE_CATEGORY:
      const index = state.findIndex(category => category.id === action.id);

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];

    case EDIT_CATEGORY:
      return state.map(category => categoryReducer(category, action));

    default:
      return state;
  }
}

export function currentCategoryIdReducer(state = null, action) {
  switch (action.type) {
    case SET_CURRENT_CATEGORY_ID:
      return action.currentCategoryId;

    default:
      return state;
  }
}

export function getSortedCategories(state) {
  let sortedCategories = [];
  state.filter(category => !('parentId' in category)).forEach((item) => {
    sortedCategories = [...sortedCategories, item, ...state.filter(category => category.parentId === item.id)];
  });
  return sortedCategories;
}
