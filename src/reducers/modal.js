import { SET_MODAL } from '../actions';

const initialState = {
  actionType: '',
  object: {},
  isDoneVisible: false,
  categoriesVisible: false
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MODAL:
      return action.modal;

    default:
      return state;
  }
}
