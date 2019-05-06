import React from 'react';

import TodoListItem from '../todo-list-item';

import styles from './todo-list.module.css';

export default function TodoList(props) {

  const handleShowEditTodoModal = (todoId) => {
    const todo = props.todos.find(todo => todoId === todo.id);
    props.showEditTodoModal(todo);
  };

  const TasksList = props.todos.map(todo =>
    <TodoListItem
      key={todo.id}
      todo={todo}
      showEditTodoModal={handleShowEditTodoModal}
      toggleTodo={props.toggleTodo}
    />
  );

  return (
    <ul className={styles.todoList}>
      {TasksList}
    </ul>
  );
}