import { connect } from 'react-redux';

import AddPanel from '../components/add-panel';
import { addTodo } from '../actions';

function mapStateToProps(state) {
  return {
    currentCategoryId: state.currentCategoryId,
  };
}

function mergeProps(stateProps, dispatchProps) {
  const { currentCategoryId } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    handleSubmit: text => dispatch(addTodo({
      text,
      done: false,
      categoryId: currentCategoryId
    })),
  };
}

const TodosBlockAddPanelContainer = connect(mapStateToProps, null, mergeProps)(AddPanel);

export default TodosBlockAddPanelContainer;