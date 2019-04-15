import React from 'react';

import './todo-list-item.css';

export default function TodoListItem(props) {

  return (
    <li className="todo-list__item">
      <input className="todo-list__item-checkbox" type="checkbox" onChange={() => props.toggleTodo(props.todo)} checked={props.todo.done} />
      <span className="todo-list__item-name">{props.todo.text}</span>
      <button className="todo-list__small-btn small-btn small-btn--edit" onClick={() => props.showEditTodoModal(props.todo.id)}>
        <i className="fas fa-edit" />
      </button>
    </li>
  );
}