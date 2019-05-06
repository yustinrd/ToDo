import { SET_TODOS, ADD_TODO, EDIT_TODO } from '../actions';
import todosSchema from "../schemas/todos";
import { normalize } from "normalizr";

const initialState = {
  byId: [],
  allIds: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TODOS:
      const normalizedTodos = normalize(action.todos, todosSchema);
      return {
        byId: normalizedTodos.entities.todos,
        allIds: normalizedTodos.result
      };

    case ADD_TODO:
      return applyAddTodo(state, action);

    case EDIT_TODO:
      return applyEditTodo(state, action);

    default:
      return state;
  }
}

const applyAddTodo = (state, action) => {
  const todo = {
    id: action.todo.id,
    text: action.todo.text,
    categoryId: action.todo.categoryId,
    done: action.todo.done
  };
  const todos = {
    ...state.byId,
    [todo.id]: todo
  };
  return {
    ...state,
    byId: todos,
    allIds: [...state.allIds, todo.id]
  };
};

const applyEditTodo = (state, action) => {
  const { id } = action.todo;
  const todos = {
    ...state.byId,
    [id]: action.todo
  };
  return {
    ...state,
    byId: todos
  };
};
