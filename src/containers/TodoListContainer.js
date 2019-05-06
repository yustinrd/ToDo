import { connect } from 'react-redux';

import TodoList from '../components/todo-list';
import { editTodo, showEditTodoModal } from '../actions';
import { getFilteredTodos } from '../selectors/todos';

function mapStateToProps(state) {
  return {
    todos: getFilteredTodos(state),
    currentCategoryId: state.currentCategoryId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTodo: todo => {
      todo.done = !todo.done;
      return dispatch(editTodo(todo));
    },
    showEditTodoModal: todo => dispatch(showEditTodoModal(todo))
  };
}

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;