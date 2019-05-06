import React from 'react';

import styles from './todo-list-item.module.css';

export default function TodoListItem(props) {

  return (
    <li className={styles.item}>
      <input type="checkbox" onChange={() => props.toggleTodo(props.todo)} checked={props.todo.done} />
      <span className={styles.itemName}>{props.todo.text}</span>
      <button className="small-btn" onClick={() => props.showEditTodoModal(props.todo.id)}>
        <i className="fas fa-edit" />
      </button>
    </li>
  );
}