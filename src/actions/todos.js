import * as todoApi from '../api/todos';

export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export function getTodos() {
  return dispatch => {
    return todoApi.getAllTodos()
      .then(response => response.data)
      .then(todos => dispatch({
        type: GET_TODOS,
        todos
      }));
  };
}

export function addTodo(todo) {
  return dispatch => {
    return todoApi.addTodo(todo)
      .then(response => response.data)
      .then(todo => dispatch({
        type: ADD_TODO,
        todo
      }));
  };
}

// export function deleteTodo(id) {
//   return dispatch => {
//     return todoApi.deleteTodo(id)
//       .then(response => dispatch({
//         type: DELETE_TODO,
//         id
//       }));
//   };
// }

export function editTodo(todo) {
  return dispatch => {
    return todoApi.editTodo(todo)
      .then(response => response.data)
      .then(todo => dispatch({
        type: EDIT_TODO,
        todo
      }));
  };
}
