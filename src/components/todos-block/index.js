import React from 'react';

import TodoListContainer from '../../containers/TodoListContainer';
import ShowDoneContainer from '../../containers/ShowDoneContainer';
import SearchPanelContainer from '../../containers/SearchPanelContainer';
import TodosBlockAddPanelContainer from '../../containers/TodosBlockAddPanelContainer';

import styles from './todos-block.module.css';

export default function TodosBlock() {

  return (
    <div className={styles.todosBlock}>
      <div className={styles.topPanel}>
        <ShowDoneContainer />
        <SearchPanelContainer />
        <TodosBlockAddPanelContainer />
      </div>
      <TodoListContainer />
    </div>
  );
}