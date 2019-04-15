import { connect } from 'react-redux';

import Modal from '../components/modal';
import { hideModal, addCategory, editCategory, editTodo } from '../actions';

function mapStateToProps(state) {
  return {
    modal: state.modal,
    categories: state.categories,
    currentCategoryId: state.currentCategoryId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClickSaveBtn: (actionType, data) => {
      switch (actionType) {
        case 'ADD_CATEGORY':
          return dispatch(addCategory(data));

        case 'EDIT_CATEGORY':
          return dispatch(editCategory(data));

        case 'EDIT_TODO':
          return dispatch(editTodo(data));

        default:
          return;
      }
    },
    hideModal: () => dispatch(hideModal())
  };
}

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default ModalContainer;