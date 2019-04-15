import client from './client';

export function getAllTodos() {
  return client.get(`/task`);
}

export function addTodo(todo) {
  return client.post(`/task`, todo);
}

export function editTodo(todo) {
  return client.put(`/task/${todo.id}`, todo);
}

export function deleteTodo(id) {
  return client.delete(`/task/${id}`);
}
