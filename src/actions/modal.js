export const SET_MODAL = 'SET_MODAL';

export function hideModal() {
  return {
    type: SET_MODAL,
    modal: {
      actionType: '',
      object: {},
      isDoneVisible: false,
      categoriesVisible: false
    }
  };
}

export function showAddCategoryModal(object) {
  return {
    type: SET_MODAL,
    modal: {
      actionType: 'ADD_CATEGORY',
      object,
      isDoneVisible: false,
      categoriesVisible: false
    }
  };
}

export function showEditCategoryModal(object) {
  return {
    type: SET_MODAL,
    modal: {
      actionType: 'EDIT_CATEGORY',
      object,
      isDoneVisible: false,
      categoriesVisible: false
    }
  };
}

export function showEditTodoModal(object) {
  return {
    type: SET_MODAL,
    modal: {
      actionType: 'EDIT_TODO',
      object,
      isDoneVisible: true,
      categoriesVisible: true
    }
  };
}